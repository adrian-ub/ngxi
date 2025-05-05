import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconHeadIcon],svg[picon-head-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 8H3V7Q1 7 1 5H0l1-2V2c3-5 10 1 5 4"></svg:path>`,
})
export class PiconHeadIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
