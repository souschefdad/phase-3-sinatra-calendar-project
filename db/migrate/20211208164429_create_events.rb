class CreateEvents < ActiveRecord::Migration[6.1]
  def change
    create_table :events do |t|
      t.string :name
      t.string :country
      t.string :location
      t.string :holiday_type
      t.references :date_d
    end
  end
end
