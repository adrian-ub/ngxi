import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsTShirtIcon],svg[majesticons-t-shirt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10V5a1 1 0 0 1 1-1h4c0 1 .8 3 4 3s4-2 4-3h4a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-1a1 1 0 0 0-1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-7a1 1 0 0 0-1-1H4a1 1 0 0 1-1-1"></svg:path>`,
})
export class MajesticonsTShirtIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
