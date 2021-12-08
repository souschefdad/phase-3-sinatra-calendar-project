class CreateDates < ActiveRecord::Migration[6.1]
  def change
    create_table :date_ds do |t|
      t.string :date
    end
  end
end
