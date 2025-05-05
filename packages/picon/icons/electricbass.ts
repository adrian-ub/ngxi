import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconElectricbassIcon],svg[picon-electricbass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 8V5l3 3m3-5l2 1l-1 1M6 6L5 7L4 5M3 1l1-1l1 2M1 3l1-1l1 2M1 5l5-5l2 2l-5 5"></svg:path>`,
})
export class PiconElectricbassIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
