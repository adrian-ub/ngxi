import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riFontMonoIcon],svg[ri-font-mono-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 4h13v2H8v6h10v2H8v7H6z"></svg:path>`,
})
export class RiFontMonoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
