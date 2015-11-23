class AddDescriptionToItem < ActiveRecord::Migration
  def change
    rename_column :items,:link,:description
  end
end
