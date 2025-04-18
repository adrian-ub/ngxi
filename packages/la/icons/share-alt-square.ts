import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laShareAltSquareIcon],svg[la-share-alt-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v22h22V5zm2 2h18v18H7zm13 3a2 2 0 0 0-1.992 2.156L13.32 14.5A2 2 0 0 0 12 14a2 2 0 0 0 0 4a2 2 0 0 0 1.32-.5l4.688 2.344A2 2 0 0 0 20 22a2 2 0 0 0 0-4a2 2 0 0 0-1.32.5l-4.688-2.344a2 2 0 0 0 0-.312L18.68 13.5A2 2 0 0 0 20 14a2 2 0 0 0 0-4"></svg:path>`,
})
export class LaShareAltSquareIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
