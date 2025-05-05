import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconUnicornIcon],svg[picon-unicorn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3 1l4 4q0 3-4 0l1 3H0q0-6 3-6m0 2h1V3H3m5-3L6 3L5 2"></svg:path>`,
})
export class PiconUnicornIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
