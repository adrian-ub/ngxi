import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLabProfileSharpIcon],svg[material-symbols-light-lab-profile-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 11.5h7v-1h-7zm0-4h7v-1h-7zM19 20.07l-4.275-5.57H5V3h14zM5 21v-5.5h9.25l4.216 5.5z"></svg:path>`,
})
export class MaterialSymbolsLightLabProfileSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
