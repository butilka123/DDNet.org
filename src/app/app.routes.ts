import { Routes } from '@angular/router';
import { DonationsComponent } from './feature/donations/donations.component';
import { DownloadsComponent } from './feature/downloads/downloads.component';
import { HomeComponent } from './feature/home/home.component';
import { RanksComponent } from './feature/ranks/ranks.component';
import { ReleasesComponent } from './feature/releases/releases.component';
import { SkinsComponent } from './feature/skins/skins.component';
import { StaffComponent } from './feature/staff/staff.component';
import { StatusComponent } from './feature/status/status.component';
import { TournamentsComponent } from './feature/tournaments/tournaments.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'donations', component: DonationsComponent },
  { path: 'status', component: StatusComponent },
  { path: 'ranks', component: RanksComponent },
  { path: 'downloads', component: DownloadsComponent },
  { path: 'skins', component: SkinsComponent },
  { path: 'staff', component: StaffComponent },
  { path: 'status', component: StatusComponent },
  { path: 'tournaments', component: TournamentsComponent },
  { path: 'releases', component: ReleasesComponent },
];
