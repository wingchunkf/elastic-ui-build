import React from "react";
import ReactDOM from "react-dom";
import dataFromJson from "./data/json-data.json";
import 'bootstrap/dist/css/bootstrap.min.css';
import indexCss from "./index.css";

function App() {    

    let i = 0;

return (
    <div className="App">    
        <div className="container-fluid">   
            <div className="logo">
                </div>  
    
                {dataFromJson.map(data => (                           
                    <div key={data.details}>    
                
                        <div className="row d-flex second-row">
                            <div className="data-col-1 col-lg-4 lg-card">
                                <h1><span className="clusterNum">Cluster</span></h1> 
                                <h4 className="blue mt-5 pt-5">General Data</h4>
                                <p>Health: {data.healthy ? <span className="green"></span> : <span className="red"></span>}</p>  
                                <p>Name: {data.displayName}</p>
                                <p>Region ID: {data.regionId}</p>
                                <p>Id: {data.displayId}</p> 
                                <p>Full ID: {data.id}</p>                           
                            </div>

                            <div className="data-col-2 col-lg-4 lg-card">
                                <h4 className="blue mt-3">User</h4>
                                <p>User ID: {data.user.id}</p>
                                <p>Premium: {data.user.isPremium ? 'Yes' : 'No'}</p>
                                <p className="mb-5">Level: {data.user.level}</p>                
                                <h4 className="blue">Kibana</h4>  
                                <p style={{ "paddingLeft": "0" }}>{data.kibana.enabled ? <span className="enabled">Enabled</span> : <span className="disabled">Disabled</span>}</p>  
                                <h4 className="blue mt-5">Monitoring</h4>    
                                <p style={{ "paddingLeft": "0" }}>{data.monitoring.enabled ? <span className="enabled">Enabled</span> : <span className="disabled">Disabled</span>}</p>
                            </div>                     
                        </div>                     
                                
                        <div className="row d-flex second-row">
                            <div className="data-col-1 col-lg-2 card">
                                <h4>Master</h4>                            
                                <p>Health: {data.master.healthy ? <span className="green"></span> : <span className="red"></span>}</p>
                                <p>Total: {data.instances.count.total}</p>                        
                            </div>

                            <div className="data-col-2 col-lg-2 card">
                                <h4>Shards</h4>
                                <p>Health: {data.shards.healthy ? <span className="green"></span> : <span className="red"></span>}</p>
                                <p>Total: {data.shards.count.total}</p>
                                <p>Available: {data.shards.count.available}</p>
                                <p>Unavailable: {data.shards.count.unavailable}</p>                             
                            </div>

                            <div className="data-col-3 col-lg-2 card">
                                <h4>Plan</h4>
                                <p>Health: {data.plan.healthy ? <span className="green"></span> : <span className="red"></span>}</p>
                                <p>Instance Capacity: {data.plan.instanceCapacity}</p>
                                <p>Instances: {data.plan.instanceCount}</p>
                                <p>Active: {data.plan.isActive  ? <span className="green"></span> : <span className="red"></span>}</p>
                                <p>Pending: {data.plan.isPending  ? 'Yes' : 'No'}</p>               
                                <p>Version: {data.plan.version}</p>
                            </div>

                            <div className="data-col-4 col-lg-2 card">
                                <h4>Instances</h4>  
                                <p>Health: {data.instances.healthy ? <span className="green"></span> : <span className="red"></span>}</p>                  
                                <p>Running: {data.instances.isStopped ? <span className="red"></span> : <span className="green"></span>}</p>
                                <p>Total: {data.instances.count.total}</p>
                                <p>Active: {data.instances.count.running} / {data.instances.count.total}</p>
                                <p>Inactive: {data.instances.count.notRunning}</p>                     
                            </div>
                        </div>

                        <div className="row d-flex second-row mb-5">
                            <div className="data-col-1 col-lg-4 lg-card">
                                <h4>Snapshots</h4>
                                <p>Health: {data.snapshots.healthy ? <span className="green"></span> : <span className="red"></span>}</p>
                                <p>Successful: {data.snapshots.latest.success ? <span className="green"></span> : <span className="red"></span>}</p>
                                <p>Total: {data.snapshots.count.total}</p>
                                <p>Name: {data.snapshots.latest.name}</p>                           
                                <p style={{ "textIndent": "15px" }}>Time: {data.snapshots.latest.time}</p>
                            </div>

                            <div className="data-col-2 col-lg-4 lg-card">
                                <h4>Configuration Steps</h4>
                                <p>Health: {data.plan.configurationSteps[i].ok ? <span className="green"></span> : <span className="red"></span>}</p>
                                <p>Value: {data.plan.configurationSteps[i].value}</p>
                                <p>Type: {data.plan.configurationSteps[0].type}</p>
                                <p style={{ "textIndent": "15px" }}>Time: {(data.plan.configurationSteps[0].time)}</p>
                                <p>Type: {data.plan.configurationSteps[1].type}</p>                            
                                <p style={{ "textIndent": "15px" }}>Time: {(data.plan.configurationSteps[1].time)}</p>                            
                            </div>                     
                        </div>

                        <div className="divider">
                        </div>
                    </div>          
                ))}
            </div>
        </div> 
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);