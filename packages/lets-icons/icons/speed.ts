import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsSpeedIcon],svg[lets-icons-speed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"><svg:path d="M4 14a8 8 0 1 1 16 0"></svg:path><svg:path d="M10 15a2 2 0 1 1 4 0"></svg:path><svg:path stroke-linecap="round" d="m13 13l2-3m5 4v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-1"></svg:path></svg:g>`,
})
export class LetsIconsSpeedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
