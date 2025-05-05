import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconVestIcon],svg[picon-vest-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 4v2h1V4M2 4v2h1V4M1 8V3l1-1V0h1v1h2V0h1v2l1 1v5"></svg:path>`,
})
export class PiconVestIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
