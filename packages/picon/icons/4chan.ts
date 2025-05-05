import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[picon4chanIcon],svg[picon-4chan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3V1l3-1l-1 2l1 1M6 7L5 8V5h2l1 3M2 7L0 8l1-3h2v3M0 3l1-1l-1-2l3 1v2"></svg:path>`,
})
export class Picon4chanIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
