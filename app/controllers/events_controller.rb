class EventsController < ApplicationController
    get '/events_list' do 
        'Events'
        all_events = Event.all
        all_events.to_json
        
        #POST events
        #DELETE some event
    end
end