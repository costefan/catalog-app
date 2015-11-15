class DefaultValue < ActiveRecord::Migration
  def change
    change_column_default :items, :upvotes, 0
  end
end
