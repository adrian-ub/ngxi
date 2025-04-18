import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siLeftDownFillIcon],svg[si-left-down-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 9.4A3.4 3.4 0 0 1 13.4 6H19a1 1 0 1 0 0-2h-5.6A5.4 5.4 0 0 0 8 9.4v7.186l-2.293-2.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L10 16.586z"></svg:path>`,
})
export class SiLeftDownFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
