import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconChickIcon],svg[picon-chick-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 3l1-1c0-3 3-2 3 0l4 1c0 5-8 4-7 0m2-1Q2.5.5 2 2m1 6V6h2v2L4 6"></svg:path>`,
})
export class PiconChickIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
