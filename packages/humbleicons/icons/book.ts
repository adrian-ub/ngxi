import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[humbleiconsBookIcon],svg[humbleicons-book-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"><svg:path d="M18 16V4H8a2 2 0 0 0-2 2v12"></svg:path><svg:path d="M18 20H8a2 2 0 1 1 0-4h10c-.673 1.613-.66 2.488 0 4z"></svg:path></svg:g>`,
})
export class HumbleiconsBookIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
