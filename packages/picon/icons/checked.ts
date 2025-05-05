import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconCheckedIcon],svg[picon-checked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5L1 3v2l2 2l4-4V1M0 8V0h8v8"></svg:path>`,
})
export class PiconCheckedIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
