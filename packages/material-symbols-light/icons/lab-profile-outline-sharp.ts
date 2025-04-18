import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLabProfileOutlineSharpIcon],svg[material-symbols-light-lab-profile-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 11.5v-1h7v1zm0-4v-1h7v1zm-2.5 7h8.725L18 18.758V4H6zM6 20h11.685l-3.435-4.5H6zm13 1H5V3h14zM6 20V4zm0-4.5v-1z"></svg:path>`,
})
export class MaterialSymbolsLightLabProfileOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
