import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineElectricCord3Icon],svg[streamline-electric-cord-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M4.122 5.698h5.756v1.55a2.878 2.878 0 1 1-5.756 0zm1.316 0V3.354m3.125 2.344V3.354"></svg:path><svg:path d="M7 10.125v2.125c0 .552.45 1.008.996.921A6.252 6.252 0 0 0 7 .75a6.25 6.25 0 0 0-3.125 11.664"></svg:path></svg:g>`,
})
export class StreamlineElectricCord3Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
