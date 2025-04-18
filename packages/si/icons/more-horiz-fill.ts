import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siMoreHorizFillIcon],svg[si-more-horiz-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 12a2 2 0 1 0 4 0a2 2 0 0 0-4 0m9 2a2 2 0 1 1 0-4a2 2 0 0 1 0 4m7 0a2 2 0 1 1 0-4a2 2 0 0 1 0 4"></svg:path>`,
})
export class SiMoreHorizFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
