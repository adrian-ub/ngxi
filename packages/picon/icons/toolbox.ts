import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconToolboxIcon],svg[picon-toolbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 3h8v1H0m3-3h2v1H3m0 3h2v1H3M0 7h8V2H6V0H2v2H0"></svg:path>`,
})
export class PiconToolboxIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
