/* This Source Code Form is subject to the terms of the Mozilla Public
* License, v. 2.0. If a copy of the MPL was not distributed with this
* file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import MenuModalComponent from './MenuModalComponent';
import getPage from '../utils/getPage';
import TooltipMarkerComponent from './TooltipMarkerComponent';
import TooltipHelpContainer from '../containers/TooltipHelpContainer';
import { UserRole } from '../types/items';
import { isRoleAdmin } from 'utils/hasPermissions';
import { hasPermissions } from '../utils/hasPermissions';
import { FlipLogOutStateAction } from '../types/redux/unsavedWarning';
import { State } from '../types/redux/state';
import { useSelector } from 'react-redux';

export default function HeaderButtonsComponent(){
	const currentUser = useSelector((state : State) => state.currentUser.profile);
	let loggedInAsAdmin = false;
	let role: UserRole | null = null;
	if (currentUser !== null){
		loggedInAsAdmin = isRoleAdmin(currentUser.role);
		role = currentUser.role;
	}
	const showOptions = getPage() === '';
	const renderLoginButton = role === null;
	const renderLogoutButton = role !== null;
	const shouldHomeButtonDisabled = getPage() === '';
	const shouldAdminButtonDisabled = getPage() === 'admin';
	const shouldGroupsButtonDisabled = getPage() === 'groups';
	const shouldMetersButtonDisabled = getPage() === 'meters';
	const shouldMapsButtonDisabled = getPage() === 'maps';
	const shouldCSVButtonDisabled = getPage() === 'csv';
	const renderCSVButton = Boolean(role && hasPermissions(role, UserRole.CSV));
	const shouldUnitsButtonDisabled = getPage() === 'units';
	const shouldConversionsButtonDisabled = getPage() === 'conversions';
	
}

