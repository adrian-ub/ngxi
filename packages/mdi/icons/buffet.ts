import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBuffetIcon],svg[mdi-buffet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 14c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1m6 0c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1M3 22l1-3H3c-.55 0-1-.45-1-1v-6c0-.55.45-1 1-1h18c.55 0 1 .45 1 1v6c0 .55-.45 1-1 1h-1l1 3h-2l-1-3H6l-1 3zm10-9v4h7v-4zm-9 0v4h7v-4z"></svg:path>`,
})
export class MdiBuffetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
