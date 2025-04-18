import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsHomeIcon],svg[zondicons-home-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 20H3V10H0L10 0l10 10h-3v10h-5v-6H8z"></svg:path>`,
})
export class ZondiconsHomeIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
