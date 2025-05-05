import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconTennisIcon],svg[picon-tennis-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 2L0 1l1-1l1 1M1 8L0 7l2-2C3-5 14 4 3 6m1-1c6-2 1-7-1-1"></svg:path>`,
})
export class PiconTennisIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
