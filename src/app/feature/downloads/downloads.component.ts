import { Component } from '@angular/core';
import { ChipModule } from 'primeng/chip';
import { PanelModule } from 'primeng/panel';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-downloads',
  imports: [TagModule, ChipModule, PanelModule, ScrollPanelModule, TableModule],
  templateUrl: './downloads.component.html',
  styleUrl: './downloads.component.scss',
})
export class DownloadsComponent {
  downloads = [
    {
      label: 'Windows 64bit',
      url: 'https://ddnet.org/downloads/DDNet-19.0-win64.zip',
    },
    {
      label: 'Windows ARM',
      url: 'https://ddnet.org/downloads/DDNet-19.0-win-arm64.zip',
    },
    {
      label: 'Windows 32bit',
      url: 'https://ddnet.org/downloads/DDNet-19.0-win32.zip',
    },
    {
      label: 'Linux x86',
      url: 'https://ddnet.org/downloads/DDNet-19.0-linux_x86.tar.xz',
    },
    {
      label: 'Linux x86-64',
      url: 'https://ddnet.org/downloads/DDNet-19.0-linux_x86_64.tar.xz',
    },
    {
      label: 'macOS (arm64 & x86-64)',
      url: 'https://ddnet.org/downloads/DDNet-19.0-macos.dmg',
    },
    {
      label: 'Android',
      url: 'https://ddnet.org/downloads/DDNet-19.0.apk',
    },
    {
      label: 'Source',
      url: 'https://ddnet.org/downloads/DDNet-19.0.tar.xz',
    },
  ];

  changes = [
    {
      tag: 'Client',
      changes: ' Add spectator count to HUD',
      authors: ['KebsCS'],
    },
    {
      tag: 'Client',
      changes: 'Auto-sync player camera option',
      authors: ['TsFreddie'],
    },
    {
      tag: 'Client',
      changes: 'Teleport hookline (when 1 exit)',
      authors: ['art0007i'],
    },
    { tag: '', changes: '', authors: [''] },
    { tag: '', changes: '', authors: [''] },
    { tag: '', changes: '', authors: [''] },
    { tag: '', changes: '', authors: [''] },
    { tag: '', changes: '', authors: [''] },
    { tag: '', changes: '', authors: [''] },
    { tag: '', changes: '', authors: [''] },
    { tag: '', changes: '', authors: [''] },
    { tag: '', changes: '', authors: [''] },
    { tag: '', changes: '', authors: [''] },
    { tag: '', changes: '', authors: [''] },
    { tag: '', changes: '', authors: [''] },
    { tag: '', changes: '', authors: [''] },
    { tag: '', changes: '', authors: [''] },
    { tag: '', changes: '', authors: [''] },
    { tag: '', changes: '', authors: [''] },
    { tag: '', changes: '', authors: [''] },
    { tag: '', changes: '', authors: [''] },
    { tag: '', changes: '', authors: [''] },
    { tag: '', changes: '', authors: [''] },
    { tag: '', changes: '', authors: [''] },
    { tag: '', changes: '', authors: [''] },
    { tag: '', changes: '', authors: [''] },
    { tag: '', changes: '', authors: [''] },
    { tag: '', changes: '', authors: [''] },
    { tag: '', changes: '', authors: [''] },
    { tag: '', changes: '', authors: [''] },
    { tag: '', changes: '', authors: [''] },
    { tag: '', changes: '', authors: [''] },
    { tag: '', changes: '', authors: [''] },
    { tag: '', changes: '', authors: [''] },
  ];

  secondaryDownloads = [
    {
      label: 'Windows 64bit',
      url: 'https://ddnet.org/downloads/DDNet-19.0-win64.zip',
    },
    {
      label: 'Windows ARM',
      url: 'https://ddnet.org/downloads/DDNet-19.0-win-arm64.zip',
    },
    {
      label: 'Windows 32bit',
      url: 'https://ddnet.org/downloads/DDNet-19.0-win32.zip',
    },
    {
      label: 'Linux x86',
      url: 'https://ddnet.org/downloads/DDNet-19.0-linux_x86.tar.xz',
    },
    {
      label: 'Linux x86-64',
      url: 'https://ddnet.org/downloads/DDNet-19.0-linux_x86_64.tar.xz',
    },
    {
      label: 'macOS (arm64 & x86-64)',
      url: 'https://ddnet.org/downloads/DDNet-19.0-macos.dmg',
    },
    {
      label: 'Android',
      url: 'https://ddnet.org/downloads/DDNet-19.0.apk',
    },
    {
      label: 'Source',
      url: 'https://ddnet.org/downloads/DDNet-19.0.tar.xz',
    },
  ];
}
