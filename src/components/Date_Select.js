export default function Date_Select(){
    return(
        <div>
            <div class="date-select">
                <div class="month-flexbox date-flexbox">
                <label for="month-select">Choose a Month </label>
                <select name="month" id="month-select">
                    <option value="january">January</option>
                    <option value="february">February</option>
                    <option value="march">March</option>
                    <option value="april">April</option>
                    <option value="may">May</option>
                    <option value="june">June</option>
                    <option value="july">July</option>
                    <option value="august">August</option>
                    <option value="september">September</option>
                    <option value="october">October</option>
                    <option value="november">November</option>
                    <option value="december">December</option>
                </select>
                </div>
                <div class="day-flexbox date-flexbox">
                <label for="day-select">Choose a Day </label>
                <select name="month" id="month-select">
                    <option value="one">1</option>
                    <option value="two">2</option>
                    <option value="three">3</option>
                    <option value="four">4</option>
                    <option value="five">5</option>
                    <option value="six">6</option>
                    <option value="seven">7</option>
                    <option value="eight">8</option>
                    <option value="nine">9</option>
                    <option value="ten">10</option>
                    <option value="eleven">11</option>
                    <option value="twelve">12</option>
                    <option value="thirteen">13</option>
                    <option value="fourteen">14</option>
                    <option value="fifteen">15</option>
                    <option value="sixteen">16</option>
                    <option value="seventeen">17</option>
                    <option value="eighteen">18</option>
                    <option value="nineteen">19</option>
                    <option value="twenty">20</option>
                    <option value="twenty-one">21</option>
                    <option value="twnety-two">22</option>
                    <option value="twenty-three">23</option>
                    <option value="twenty-four">24</option>
                    <option value="twenty-five">25</option>
                    <option value="twenty-six">26</option>
                    <option value="twenty-seven">27</option>
                    <option value="twenty-eight">28</option>
                    <option value="twnety-nine">29</option>
                    <option value="thirty">30</option>
                    <option value="thirty-one">31</option>
                </select>
                
                </div>
                <div class="year-flexbox date-flexbox">
                <label for="year-select">Choose a Year </label>
                <select name="month" id="month-select">
                    <option value="2024">2024</option>
                </select>
                </div>
            </div>
        </div>
    );
}