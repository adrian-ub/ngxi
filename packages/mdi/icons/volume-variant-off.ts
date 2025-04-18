import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiVolumeVariantOffIcon],svg[mdi-volume-variant-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.64 3.64l15.72 15.72l-1.41 1.42L16 16.83V20l-5-5H7V9h1.17L4.22 5.05zM16 4v7.17l-3.59-3.59z"></svg:path>`,
})
export class MdiVolumeVariantOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
