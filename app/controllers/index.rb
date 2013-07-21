get '/' do
  erb :index
end

post '/create' do
  @note = Note.create(params)
  redirect '/'
end

get '/update' do
  @note_update = Note.find(params["id"])
  erb :_update, :layout => !request.xhr?
end

post '/update' do
  note = Note.find(params[:id].to_i)
  note.title = params[:title]
  note.content = params[:content]
  note.save
  erb :index
end

post '/delete' do
  note = Note.find(params[:id])
  note.destroy
  redirect '/'
end