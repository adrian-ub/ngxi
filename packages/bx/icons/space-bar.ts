import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxSpaceBarIcon],svg[bx-space-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 13H7V9H5v6h14V9h-2z"></svg:path>`,
})
export class BxSpaceBarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
