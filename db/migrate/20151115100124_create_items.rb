class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.string :title
      t.string :link
      t.integer :upvotes

      t.timestamps null: false
    end
  end
end
