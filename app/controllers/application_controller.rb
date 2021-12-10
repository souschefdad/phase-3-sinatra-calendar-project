require 'pry'

class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/" do
    'Home'
  end

  get '/date_ds' do
    all_date_ds = Date_d.all
    all_date_ds.to_json
  end

  get '/events_list' do 
    'Events'
    all_events = Event.all
    all_events.to_json
  end

  post '/event_list' do
    event = Event.create(
    name:params[:name], 
    country:params[:country], 
    location:params[:location], 
    holiday_type:params[:holiday_type],
    date_d_id:params[:date_d_id]
    )
  
    event.to_json(include: :date_d)
  end

  delete '/event_list/:id' do
    event = Event.find(params[:id])
    event.destroy
    {message: "deaded"}.to_json
  end

end
