body {
  font-family: "Lato", sans-serif;
}

.side {
  height: 100%;
  width: 400px;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  background-color: rgb(0, 0, 0);
  overflow-x: hidden;
  padding-top: 20px;
}

###
.side a {
  padding: 6px 6px 6px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
}

.side a:hover {
  color: #f1f1f1;
}

###


.main {
  margin-left: 10px; 
}


@media screen and (max-height: 450px) {
  .side {padding-top: 15px;}
  .side {font-size: 18px;}
}







.highcharts-figure, .highcharts-data-table table {
  min-width: 360px; 
  max-width: 800px;
  margin: 1em auto;
}

.highcharts-data-table table {
	font-family: Verdana, sans-serif;
	border-collapse: collapse;
	border: 1px solid #EBEBEB;
	margin: 10px auto;
	text-align: center;
	width: 100%;
	max-width: 500px;
}
.highcharts-data-table caption {
  padding: 1em 0;
  font-size: 1.2em;
  color: #555;
}
.highcharts-data-table th {
	font-weight: 600;
  padding: 0.5em;
}
.highcharts-data-table td, .highcharts-data-table th, .highcharts-data-table caption {
  padding: 0.5em;
}
.highcharts-data-table thead tr, .highcharts-data-table tr:nth-child(even) {
  background: #f8f8f8;
}
.highcharts-data-table tr:hover {
  background: #f1f7ff;
}











