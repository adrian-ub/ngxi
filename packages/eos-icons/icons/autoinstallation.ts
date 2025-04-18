import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eosIconsAutoinstallationIcon],svg[eos-icons-autoinstallation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.424 16.5h5.12v-6h4.448a9.004 9.004 0 1 0-6.458 9.11Zm-1.908-5.526a2.5 2.5 0 1 1 2.5 2.5a2.5 2.5 0 0 1-2.5-2.5"></svg:path><svg:path fill="currentColor" d="M22.045 18h-3v-6h-2v6h-3l4 4z"></svg:path>`,
})
export class EosIconsAutoinstallationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
