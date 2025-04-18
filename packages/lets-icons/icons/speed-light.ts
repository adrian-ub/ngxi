import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsSpeedLightIcon],svg[lets-icons-speed-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round"><svg:path d="M3.5 14a8.5 8.5 0 0 1 17 0"></svg:path><svg:path d="M9.5 15a2.5 2.5 0 1 1 5 0"></svg:path><svg:path stroke-linecap="round" d="m13.5 12.5l2-3m5 4.5v.5a1 1 0 0 1-1 1h-15a1 1 0 0 1-1-1V14"></svg:path></svg:g>`,
})
export class LetsIconsSpeedLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
