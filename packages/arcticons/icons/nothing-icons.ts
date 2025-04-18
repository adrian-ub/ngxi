import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNothingIconsIcon],svg[arcticons-nothing-icons-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.394 12.382v9.792l-6.788-4.896l-6.787-4.896V24H4.5l9.319 6.722l6.787 4.896v-9.792l6.788 4.896l6.787 4.896v-18.34z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.181 17.278L43.5 24h-9.319"></svg:path>`,
})
export class ArcticonsNothingIconsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
