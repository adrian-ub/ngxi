import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightMenuOpenIcon],svg[material-symbols-light-menu-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 17v-1h11.423v1zm15.292-.904L15.158 12l4.134-4.077l.708.708L16.573 12L20 15.389zM4 12.5v-1h8.577v1zM4 8V7h11.423v1z"></svg:path>`,
})
export class MaterialSymbolsLightMenuOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
