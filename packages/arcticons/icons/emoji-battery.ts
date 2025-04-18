import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEmojiBatteryIcon],svg[arcticons-emoji-battery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39.35 20.735v-4.37a.61.61 0 0 0-.612-.61H6.112a.61.61 0 0 0-.612.61v15.27c0 .337.274.61.612.61H38.74a.61.61 0 0 0 .612-.61V27.56H42.5v-6.826z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.7 18.3h20.954v11.602H8.7z"></svg:path>`,
})
export class ArcticonsEmojiBatteryIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
