class CommentsController < ApplicationController
  def create
    item = Item.find(params[:item_id])
    comment = item.comments.create(comment_params)

    respond_with item, comment
  end

  def upvote
    item = Item.find(params[:post_id])
    comment = item.comments.find(params[:id])
    comment.increment!(:upvotes)

    respond_with item, comment
  end

  private
  def comment_params
    params.require(:comment).permit(:body)
  end
end
