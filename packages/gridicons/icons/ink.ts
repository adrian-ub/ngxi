import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gridiconsInkIcon],svg[gridicons-ink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 15a7 7 0 1 0 14 0a6.96 6.96 0 0 0-1.105-3.765h.007L12 2l-5.903 9.235h.007A6.97 6.97 0 0 0 5 15"></svg:path>`,
})
export class GridiconsInkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
