import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery/dist/jquery.min.js';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function(){
      $("button").click(function(){
          var div = $("div");  
          div.animate({left: '100px'}, "slow");
          div.animate({fontSize: '5em'}, "slow");
      });
  });

  }

}
