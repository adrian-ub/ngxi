import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconScreenIcon],svg[picon-screen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 5V2H1v3m1 2l1-1H0V1h8v5H5l1 1"></svg:path>`,
})
export class PiconScreenIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
