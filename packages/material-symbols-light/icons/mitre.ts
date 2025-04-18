import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightMitreIcon],svg[material-symbols-light-mitre-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.77 14.116V9.885h2.115v-3.77h-2.116v-4.23H19v4.23h-2.116v3.77H19v4.23zm-8.77 8v-4.232h2.116v-3.768H5V9.885h2.116v-3.77H5v-4.23h5.23v4.23H8.117v3.77h2.115v4.23H8.116v3.77h2.115v4.23z"></svg:path>`,
})
export class MaterialSymbolsLightMitreIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
