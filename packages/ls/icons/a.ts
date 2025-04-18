import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsAIcon],svg[ls-a-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M491 222v-94h72v526h-72v-74c-50 55-124 91-206 91C133 671 0 551 0 401s133-270 285-270c82 0 156 36 206 91m0 185v-12c-4-110-95-198-207-198c-115 0-215 91-215 204s100 204 215 204c112 0 203-88 207-198"></svg:path>`,
})
export class LsAIcon {
  readonly viewBox = input("0 0 563 671")
  readonly width = input("0.84em")
  readonly height = input("1em")
}
