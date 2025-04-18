import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsRollIcon],svg[lets-icons-roll-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><svg:path d="M5 16c5.333 0 5.333-7.429 0-8m12 8c5.333 0 5.333-7.429 0-8m-6 8c5.333 0 5.333-7.429 0-8m6.5 8H5m12-8H5"></svg:path><svg:path d="M5 16a2 2 0 1 1 .518-3.932"></svg:path></svg:g>`,
})
export class LetsIconsRollIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
