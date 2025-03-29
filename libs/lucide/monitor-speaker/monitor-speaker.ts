import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideMonitorSpeaker],svg[lucide-monitor-speaker]',
  host: {
    class: 'lucide lucide-monitor-speaker',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M5.5 20H8" />
    <svg:path d="M17 9h.01" />
    <svg:rect width="10" height="16" x="12" y="4" rx="2" />
    <svg:path d="M8 6H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4" />
    <svg:circle cx="17" cy="15" r="1" />
  `,
})
export class LucideMonitorSpeaker {}
