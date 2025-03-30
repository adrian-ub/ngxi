import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siPlatformdotsh],svg[si-platformdotsh]',
  host: {
    role: 'img',
    viewBox: '0 0 24 24',
    xmlns: 'http://www.w3.org/2000/svg',
  },
  template: `<svg:title>Platform.sh</svg:title>
    <svg:path
      d="M24 0H0v9.541h24V0zM24 20.755H0V24h24v-3.245zM0 12.618h24v4.892H0v-4.892z"
    />`,
})
export class SiPlatformdotsh {}
