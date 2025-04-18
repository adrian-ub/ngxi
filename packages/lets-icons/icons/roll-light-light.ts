import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsRollLightLightIcon],svg[lets-icons-roll-light-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round"><svg:path d="M5 15.5c5.5 0 5.5-6.5 0-7m12 7c5.5 0 5.5-6.5 0-7m-6 7c5.5 0 5.5-6.5 0-7m6 7H4.5m12.5-7H5"></svg:path><svg:path d="M4.5 15.5a2 2 0 1 1 1.932-2.518"></svg:path></svg:g>`,
})
export class LetsIconsRollLightLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
