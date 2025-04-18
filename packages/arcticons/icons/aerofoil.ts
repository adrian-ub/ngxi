import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAerofoilIcon],svg[arcticons-aerofoil-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="arcticonsAerofoil0" fill="none" stroke="currentColor" d="m10.06 15.8l9.84 16.4h14.76l6.56-9.84H28.1l-4.92-6.56z"></svg:path></svg:defs><svg:use href="#arcticonsAerofoil0" stroke-linecap="round" stroke-linejoin="round"></svg:use><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m19.9 32.2l3.28-6.56h8.2l3.28 6.56zm18.04-4.92h6.56l-3.28-4.92zM6.78 24L3.5 19.08h5.248zm3.28-8.2L6.78 24h8.2z"></svg:path><svg:use href="#arcticonsAerofoil0" stroke-linecap="round" stroke-linejoin="round"></svg:use><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m19.9 32.2l3.28-6.56h8.2l3.28 6.56z"></svg:path>`,
})
export class ArcticonsAerofoilIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
