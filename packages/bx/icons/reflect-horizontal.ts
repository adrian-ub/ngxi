import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxReflectHorizontalIcon],svg[bx-reflect-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 21h12l-6-6zM18 3H6l6 6zM3 11h3v2H3zm5 0h3v2H8zm5 0h3v2h-3zm5 0h3v2h-3z"></svg:path>`,
})
export class BxReflectHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
