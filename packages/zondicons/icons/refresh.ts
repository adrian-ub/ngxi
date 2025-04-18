import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsRefreshIcon],svg[zondicons-refresh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 3v2a5 5 0 0 0-3.54 8.54l-1.41 1.41A7 7 0 0 1 10 3m4.95 2.05A7 7 0 0 1 10 17v-2a5 5 0 0 0 3.54-8.54zM10 20l-4-4l4-4zm0-12V0l4 4z"></svg:path>`,
})
export class ZondiconsRefreshIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
