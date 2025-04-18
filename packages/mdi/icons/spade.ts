import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSpadeIcon],svg[mdi-spade-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.71 1.22l-2.83 2.83c-.78.78-.78 2.04 0 2.82l1.42 1.42l-4.24 4.24l-2.48-2.47l-6.36 6.36l6.36 6.36l6.36-6.36l-2.47-2.48l4.24-4.24l1.42 1.42c.78.78 2.04.78 2.82 0l2.83-2.83zm0 2.83l4.24 4.24l-1.41 1.41l-4.24-4.24z"></svg:path>`,
})
export class MdiSpadeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
