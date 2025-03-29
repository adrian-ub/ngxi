import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideJoystick],svg[lucide-joystick]',
  host: {
    class: 'lucide lucide-joystick',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    linecap: 'round',
    linejoin: 'round',
  },
  template: `
    <svg:path
      d="M21 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2Z"
    />
    <svg:path d="M6 15v-2" />
    <svg:path d="M12 15V9" />
    <svg:circle cx="12" cy="6" r="3" />
  `,
})
export class LucideJoystick {}
