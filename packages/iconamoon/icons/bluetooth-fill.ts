import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonBluetoothFillIcon],svg[iconamoon-bluetooth-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.498 2.135a1 1 0 0 1 .998-.003l7 4a1 1 0 0 1 .085 1.682L13.721 12l5.86 4.186a1 1 0 0 1-.085 1.682l-7 4A1 1 0 0 1 11 21v-7.057l-5.419 3.87a1 1 0 1 1-1.162-1.627L10.279 12L4.42 7.814a1 1 0 1 1 1.16-1.628l5.42 3.87V3a1 1 0 0 1 .498-.865M13 13.943l4.148 2.963L13 19.276zm0-3.886V4.723l4.148 2.37z" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonBluetoothFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
