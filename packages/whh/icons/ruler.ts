import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhRulerIcon],svg[whh-ruler-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1015.43 855l-160 160q-10 9-23 9t-22-9l-63-63l81-81q9-9 0-17l-17-18q-9-9-18 0l-81 81l-125-125l81-81q9-9 0-17l-17-18q-9-9-18 0l-81 81l-125-125l81-81q9-9 0-17l-17-18q-9-9-18 0l-81 81l-125-125l81-81q9-9 0-17l-17-18q-9-9-18 0l-81 81l-125-125l81-81q9-9 0-17l-17-18q-9-9-18 0l-81 81l-63-63q-9-9-9-22t9-23l160-160q10-9 23-9t22 9l801 801q9 9 9 22t-9 23"></svg:path>`,
})
export class WhhRulerIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
