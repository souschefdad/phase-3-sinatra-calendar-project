puts "🌱 Seeding spices..."

# Seed your database here

d1 = Date_d.create(date: "12/2/2021")

e1 = Event.create(name: "Yay Day", country: "US", location: "Here", holiday_type: "Local", date_d_id:d1.id)


puts "✅ Done seeding!"
