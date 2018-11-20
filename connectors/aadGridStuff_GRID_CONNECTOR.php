<?php
  define('IN_ADPT', true);

  require('/dhtmlx/connector/grid_connector.php');
  require('/dhtmlx/connector/db_config.php');
  require('/dhtmlx/connector/db_sqlsrv.php');

  ini_set('display_errors', 'On');
  error_reporting(E_ALL);

$sql_db = 'aasisData';
$sql_conn_info = array('Database'=>$sql_db, 'UID'=>$sql_user, 'PWD'=>$sql_pass);

$conn = sqlsrv_connect($sql_beta_server,$sql_conn_info);

$gridConn = new GridConnector($conn, 'SQLSrv');

  if(isset($_GET['cData'])){

    $gridConn->render_complex_sql("SELECT TOP (1000)".$_GET['cData']." FROM iofa" , "iofaID",$_GET['cData']);
}else{
    echo "LOAD FAIL";
}

?>