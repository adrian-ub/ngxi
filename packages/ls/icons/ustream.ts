import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsUstreamIcon],svg[ls-ustream-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M373 534c-71 0-113-55-113-163V29h229v342c0 111-41 163-116 163m257-172V39c12 9 20 24 20 40v550c0 28-22 50-50 50H50c-28 0-50-22-50-50V79c0-28 22-50 50-50h68v331c0 199 92 288 251 288c163 0 261-92 261-286"></svg:path>`,
})
export class LsUstreamIcon {
  readonly viewBox = input("0 0 650 679")
  readonly width = input("0.96em")
  readonly height = input("1em")
}
