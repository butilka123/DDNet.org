import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DonationsComponent } from './donations/donations.component';
import { DownloadsComponent } from './downloads/downloads.component';
import { HomeComponent } from './home/home.component';
import { RanksComponent } from './ranks/ranks.component';
import { ReleasesComponent } from './releases/releases.component';
import { SkinsComponent } from './skins/skins.component';
import { StaffComponent } from './staff/staff.component';
import { StatusComponent } from './status/status.component';
import { TournamentsComponent } from './tournaments/tournaments.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeComponent,
    DownloadsComponent,
    RanksComponent,
    ReleasesComponent,
    SkinsComponent,
    StaffComponent,
    StatusComponent,
    TournamentsComponent,
    DonationsComponent,
  ],
})
export class FeatureModule {}
