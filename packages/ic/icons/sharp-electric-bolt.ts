import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpElectricBoltIcon],svg[ic-sharp-electric-bolt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 2L2.5 13L13 14l-5 7l1 1l12.5-11L11 10l5-7z"></svg:path>`,
})
export class IcSharpElectricBoltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
