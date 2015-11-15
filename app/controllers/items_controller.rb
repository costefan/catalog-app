class ItemsController < ApplicationController
  def index
    respond_with Item.all
  end

  def create
    respond_with Item.create(post_params)
  end

  def show
    respond_with Item.find(params[:id])
  end

  def upvote
    item = Item.find(params[:id])
    item.increment!(:upvotes)

    respond_with item
  end

  private
  def post_params
    params.require(:item).permit(:title, :price)
  end
end
