class Date_d < ActiveRecord::Base
    has_many :events

    def add_event(name, country, location, holiday_type)
        # Add an event to an instance of Date_d
        Event.create(name: name, country: country, location: location, holiday_type: holiday_type, date_d: self.id)
    end

end

=begin
Every body mentioned this way
to have multiline comments.

The =begin and =end must be at the beginning of the line or
it will be a syntax error.
=end
