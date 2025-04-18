import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpNetworkLockedIcon],svg[ic-sharp-network-locked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 16v-.36c0-1.31-.94-2.5-2.24-2.63A2.5 2.5 0 0 0 17 15.5v.5h-1v6h7v-6zm-1 0h-3v-.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5zm-1.5-5c.15 0 .3.01.46.02c.01 0 .03.01.04.01V1L1 20h13v-6h1.26c.22-.63.58-1.2 1.06-1.68c.85-.85 1.98-1.32 3.18-1.32"></svg:path>`,
})
export class IcSharpNetworkLockedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
