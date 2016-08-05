require 'sinatra/base'
require 'json'





class Thermostat < Sinatra::Base
set :public_folder, 'public_folder'

  get '/' do
    File.read('index6.html')
  end

  # start the server if ruby file executed directly
  run! if app_file == $0
end
