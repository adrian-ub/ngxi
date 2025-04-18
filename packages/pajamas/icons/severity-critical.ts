import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasSeverityCriticalIcon],svg[pajamas-severity-critical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m6.706.185l4.088 2.31c.437.246.706.702.706 1.195v4.62c0 .493-.269.949-.706 1.195l-4.088 2.31a1.44 1.44 0 0 1-1.412 0l-4.088-2.31A1.38 1.38 0 0 1 .5 8.31V3.69c0-.493.269-.949.706-1.195L5.294.185a1.44 1.44 0 0 1 1.412 0"></svg:path>`,
})
export class PajamasSeverityCriticalIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
