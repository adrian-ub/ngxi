import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBowTieIcon],svg[mdi-bow-tie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15 14l6 3V7l-6 3zm-6 0l-6 3V7l6 3zm1-4h4v4h-4z"></svg:path>`,
})
export class MdiBowTieIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
