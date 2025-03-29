import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideMonitorCog],svg[lucide-monitor-cog]',
  host: {
    class: 'lucide lucide-monitor-cog',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path d="M12 17v4" />
    <svg:path d="m15.2 4.9-.9-.4" />
    <svg:path d="m15.2 7.1-.9.4" />
    <svg:path d="m16.9 3.2-.4-.9" />
    <svg:path d="m16.9 8.8-.4.9" />
    <svg:path d="m19.5 2.3-.4.9" />
    <svg:path d="m19.5 9.7-.4-.9" />
    <svg:path d="m21.7 4.5-.9.4" />
    <svg:path d="m21.7 7.5-.9-.4" />
    <svg:path d="M22 13v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7" />
    <svg:path d="M8 21h8" />
    <svg:circle cx="18" cy="6" r="3" />
  `,
})
export class LucideMonitorCog {}
