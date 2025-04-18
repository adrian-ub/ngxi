import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTableStarIcon],svg[mdi-table-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3h14a2 2 0 0 1 2 2v7.08a6 6 0 0 0-4.32.92H12v4h1.08c-.11.68-.11 1.35 0 2H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2m0 4v4h6V7zm8 0v4h6V7zm-8 6v4h6v-4zm12.5 8.6l.7-2.8l-2.2-1.9l2.9-.2L19 14l1.1 2.6l2.9.2l-2.2 1.9l.7 2.8l-2.5-1.4z"></svg:path>`,
})
export class MdiTableStarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
