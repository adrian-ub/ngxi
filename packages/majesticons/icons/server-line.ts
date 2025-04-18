import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsServerLineIcon],svg[majesticons-server-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12V8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4M3 12h18M3 12v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4M6 9h.01M6 15h.01M9 9h.01M9 15h.01"></svg:path>`,
})
export class MajesticonsServerLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
