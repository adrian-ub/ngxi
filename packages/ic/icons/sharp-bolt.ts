import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpBoltIcon],svg[ic-sharp-bolt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 21h-1l1-7H6.74S10.42 7.54 13 3h1l-1 7h4.28z"></svg:path>`,
})
export class IcSharpBoltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
