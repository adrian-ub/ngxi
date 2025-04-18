import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gridiconsPinIcon],svg[gridicons-pin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 17c0-2.038-1.188-3.836-3-4.92V5h.5a1.5 1.5 0 0 0 0-3h-9a1.5 1.5 0 0 0 0 3H8v7.08C6.188 13.164 5 14.962 5 17h6v4c0 .55.45 1 1 1s1-.45 1-1v-4z"></svg:path>`,
})
export class GridiconsPinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
