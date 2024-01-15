from flask import Flask, request, jsonify
from flask import Flask, request, jsonify
from flask_cors import CORS  



app = Flask(__name__)
CORS(app) 

@app.route('/calculate', methods=['POST'])
def calculate():
    data = request.get_json()

    aolEarned = data["aolPointsEarned"]
    aolTotals = data['aolTotalPoints']
    aflEarned = data['aflPointsEarned']
    aflTotals = data['aflTotalPoints']
      

    weighted_average = calculate_weighted_average(aolEarned, aolTotals, aflEarned, aflTotals)
   
    return jsonify({'result': weighted_average})

def calculate_weighted_average(aolEarned, aolTotals, aflEarned, aflTotals):
    aolEarnedSum = sum(aolEarned)  
    aolTotalsSum = sum(aolTotals) 
    aflEarnedSum = sum(aflEarned) 
    aflTotalsSum = sum(aflTotals)
 
    finalGrade = 0;
    

    if (aolEarnedSum > 0 and aolTotalsSum > 0 and aflEarnedSum > 0 and aflTotalsSum > 0):
      finalGrade = 100 * ((0.8 * (aolEarnedSum / aolTotalsSum)) + (0.2 * (aflEarnedSum / aflTotalsSum)));
    elif (aolEarnedSum > 0 and aolTotalsSum > 0):
      aolCalculated = aolEarnedSum / aolTotalsSum;
      finalGrade = 100 * aolCalculated;
    elif (aflEarnedSum > 0 and aflTotalsSum > 0):
      aflCalculated = aflEarnedSum / aflTotalsSum;
      finalGrade = 100 * aflCalculated;
    else:
      finalGrade = 0;
    
    return round(finalGrade, 4)

if __name__ == '__main__':
    app.run(debug=True)
