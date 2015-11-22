class CommentsController < ApplicationController
  def create
    item = Item.find(params[:item_id])
    comment = item.comments.create(comment_params)

    respond_with item, comment
  end

  private
  def comment_params
    params.require(:comment).permit(:body)
  end
end
