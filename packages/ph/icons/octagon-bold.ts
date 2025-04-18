import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phOctagonBoldIcon],svg[ph-octagon-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m230.14 77.41l-51.55-51.55A19.85 19.85 0 0 0 164.45 20h-72.9a19.85 19.85 0 0 0-14.14 5.86L25.86 77.41A19.85 19.85 0 0 0 20 91.55v72.9a19.85 19.85 0 0 0 5.86 14.14l51.55 51.55A19.85 19.85 0 0 0 91.55 236h72.9a19.85 19.85 0 0 0 14.14-5.86l51.55-51.55a19.85 19.85 0 0 0 5.86-14.14v-72.9a19.85 19.85 0 0 0-5.86-14.14M212 162.79L162.79 212H93.21L44 162.79V93.21L93.21 44h69.58L212 93.21Z"></svg:path>`,
})
export class PhOctagonBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
