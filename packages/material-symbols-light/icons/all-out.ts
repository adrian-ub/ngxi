import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAllOutIcon],svg[material-symbols-light-all-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20v-3.5h1V19h2.5v1zm12.5 0v-1H19v-2.5h1V20zM12 18q-2.496 0-4.248-1.752T6 12t1.752-4.248T12 6t4.248 1.752T18 12t-1.752 4.248T12 18M4 7.5V4h3.5v1H5v2.5zm15 0V5h-2.5V4H20v3.5z"></svg:path>`,
})
export class MaterialSymbolsLightAllOutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
