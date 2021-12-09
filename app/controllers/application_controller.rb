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

end
