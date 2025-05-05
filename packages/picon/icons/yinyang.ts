import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconYinyangIcon],svg[picon-yinyang-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 4c0-5.5 8-5.5 8 0S0 9.5 0 4m7 0c0-4-6-4-6 0c3-4 3 4 6 0M2 5h1V4H2m3-1h1v1H5"></svg:path>`,
})
export class PiconYinyangIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
