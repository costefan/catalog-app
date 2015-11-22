class DeleteUpvotes < ActiveRecord::Migration
  def change
    remove_column :items,:upvotes
    remove_column :comments,:upvotes
  end
end
