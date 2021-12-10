require 'faker'

puts "🌱 Seeding spices..."

# Seed your database here
d1 = Date_d.create(date: "12/9/2021")
d2 = Date_d.create(date: "12/24/2021")
d3 = Date_d.create(date: "12/25/2021")
d4 = Date_d.create(date: "12/31/2021")
d5 = Date_d.create(date: "1/1/2022")


# mm/dd/yyyy
# dates_4_fun = ["12/01/2021", "12/03/2021", "12/04/2021", "12/05/2021", "12/06/2021", "12/07/2021", "12/08/2021", "12/09/2021", "12/10/2021", "12/11/2021", "12/12/2021", "12/13/2021"]


e1 = Event.create(name: "Yay Day", country: "US", location: "Here", holiday_type: "Local", date_d_id:d1.id)
e2 = Event.create(name: "Christmas", country: "International", location: "National", holiday_type: "International", date_d_id:d3.id)

puts "✅ Done seeding!"
