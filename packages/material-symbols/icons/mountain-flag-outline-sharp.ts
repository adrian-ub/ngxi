import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMountainFlagOutlineSharpIcon],svg[material-symbols-mountain-flag-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.7 12.925l1.375.925L12 12.875l1.925.975l1.325-.875l-1-1.975h-4.6zM5.225 20H18.75l-2.6-5.225l-2.075 1.375L12 15.125L9.925 16.15L7.8 14.75zM2 22L8.4 9H11V2h7l-1 2l1 2h-5v3h2.5L22 22z"></svg:path>`,
})
export class MaterialSymbolsMountainFlagOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
