import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpOilBarrelIcon],svg[ic-sharp-oil-barrel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 13v-2h-2V5h2V3H3v2h2v6H3v2h2v6H3v2h18v-2h-2v-6zm-9 3c-1.66 0-3-1.32-3-2.95c0-1.3.52-1.67 3-4.55c2.47 2.86 3 3.24 3 4.55c0 1.63-1.34 2.95-3 2.95"></svg:path>`,
})
export class IcSharpOilBarrelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
