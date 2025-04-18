import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneSettingsEthernetIcon],svg[ic-twotone-settings-ethernet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.77 6.76L6.23 5.48L.82 12l5.41 6.52l1.54-1.28L3.42 12zM7 13h2v-2H7zm10-2h-2v2h2zm-6 2h2v-2h-2zm6.77-7.52l-1.54 1.28L20.58 12l-4.35 5.24l1.54 1.28L23.18 12z"></svg:path>`,
})
export class IcTwotoneSettingsEthernetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
