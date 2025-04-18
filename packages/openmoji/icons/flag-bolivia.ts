import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFlagBoliviaIcon],svg[openmoji-flag-bolivia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#f1b31c" d="M5 17h62v38H5z"></svg:path><svg:path fill="#5c9e31" d="M5 42h62v13H5z"></svg:path><svg:path fill="#d22f27" d="M5 17h62v13H5z"></svg:path><svg:ellipse cx="38.5" cy="33.2" rx="2.2" ry="1.2" transform="rotate(-45 38.5 33.2)"></svg:ellipse><svg:ellipse cx="34.5" cy="33.2" rx="1.2" ry="2.2" transform="rotate(-45 34.5 33.2)"></svg:ellipse><svg:ellipse cx="36.5" cy="36.867" fill="#61b2e4" rx="2" ry="3.133"></svg:ellipse><svg:path fill="#d22f27" d="M40 41a1 1 0 0 1-.707-1.707a1.725 1.725 0 0 0-.006-2.592a1 1 0 0 1 1.42-1.408a3.72 3.72 0 0 1 0 5.414A1 1 0 0 1 40 41m-7.111 0a1 1 0 0 1-.707-.293a3.72 3.72 0 0 1 0-5.414a1 1 0 0 1 1.419 1.41a1.724 1.724 0 0 0-.005 2.59A1 1 0 0 1 32.889 41"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z"></svg:path>`,
})
export class OpenmojiFlagBoliviaIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
