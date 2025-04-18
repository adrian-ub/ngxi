import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eosIconsVirtualRealityIcon],svg[eos-icons-virtual-reality-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 10h2v4h-2zM1 10h2v4H1zm17-1a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2a2 2 0 0 0 2 2h1.028l1.602-2.776a1.582 1.582 0 0 1 2.74 0L14.972 17H16a2 2 0 0 0 2-2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2m-1 3H7v-2h10Z"></svg:path>`,
})
export class EosIconsVirtualRealityIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
