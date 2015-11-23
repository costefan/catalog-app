class ItemsController < ApplicationController
  def index
    respond_with Item.all
  end

  def show
    respond_with Item.find(params[:id])
  end

  private
  def post_params
    params.require(:item).permit(:title, :description, :price)
  end
end
