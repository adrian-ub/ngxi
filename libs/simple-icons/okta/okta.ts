import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siOkta],svg[si-okta]',
  host: {
    role: 'img',
    viewBox: '0 0 24 24',
    xmlns: 'http://www.w3.org/2000/svg',
  },
  template: `<svg:title>Okta</svg:title>
    <svg:path
      d="M12 0C5.389 0 0 5.35 0 12s5.35 12 12 12 12-5.35 12-12S18.611 0 12 0zm0 18c-3.325 0-6-2.675-6-6s2.675-6 6-6 6 2.675 6 6-2.675 6-6 6z"
    />`,
})
export class SiOkta {}
