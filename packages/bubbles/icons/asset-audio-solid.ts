import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesAssetAudioSolidIcon],svg[bubbles-asset-audio-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M5.393 1.145L2.43 4.11a.13.13 0 0 1-.088.036H1.247a1 1 0 0 0-1 1v1.707a1 1 0 0 0 1 1h1.095c.033 0 .065.014.088.037l2.963 2.963a.5.5 0 0 0 .854-.352v-9a.5.5 0 0 0-.854-.355M9.04 2.483a.5.5 0 0 0-.707.707a3.97 3.97 0 0 1 0 5.62a.5.5 0 0 0 .707.707a4.97 4.97 0 0 0 0-7.034"></svg:path><svg:path d="M7.815 3.75a.5.5 0 1 0-.708.705a2.19 2.19 0 0 1 0 3.089a.5.5 0 1 0 .708.706a3.19 3.19 0 0 0 0-4.5"></svg:path></svg:g>`,
})
export class BubblesAssetAudioSolidIcon {
  readonly viewBox = input("0 0 11 11")
  readonly width = input("1em")
  readonly height = input("1em")
}
