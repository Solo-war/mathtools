import { Routes, Route, Navigate } from 'react-router-dom'

import BisectionPage from './Bisection'
import ChordPage from './Chord'
import GoldenSectionPage from './GoldenSection'
import RidderPage from './Ridder'
import NewtonPage from './Newton'

const NonlinearEquations = () => {
	return (
		<Routes>
			<Route path='/bisection' element={<BisectionPage />} />
			<Route path='/chord' element={<ChordPage />} />
			<Route path='/golden-section' element={<GoldenSectionPage />} />
			<Route path='/ridder' element={<RidderPage />} />
			<Route path='/newton' element={<NewtonPage />} />

			<Route path='*' element={<Navigate to='/' replace />} />
		</Routes>
	)
}

export default NonlinearEquations
