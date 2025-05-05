import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconDuckIcon],svg[picon-duck-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 1h1V0M3 8V6L0 3h4Q1 0 5 0l2 2H5q4 4-1 4v1l2 1"></svg:path>`,
})
export class PiconDuckIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
