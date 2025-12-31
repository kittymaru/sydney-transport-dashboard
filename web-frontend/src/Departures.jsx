import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, useLocation, useParams } from 'react-router-dom';

function DeparturePage() {
  return (
    <>{useParams().stopid}</>
  );
}

export default DeparturePage