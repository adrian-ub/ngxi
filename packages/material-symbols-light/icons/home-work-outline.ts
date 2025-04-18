import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightHomeWorkOutlineIcon],svg[material-symbols-light-home-work-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.23 8.77h1.54V7.23h-1.54zm0 4h1.54v-1.54h-1.54zm0 4h1.54v-1.54h-1.54zM16 20v-1h5V5h-9.615v2.189l-1-.72V4H22v16zM2 20v-8.5l6-4.27l6 4.27V20H9.27v-4.5H6.73V20zm1-1h2.73v-4.5h4.54V19H13v-7L8 8.489L3 12zm7.27 0v-4.5H5.73V19v-4.5h4.54z"></svg:path>`,
})
export class MaterialSymbolsLightHomeWorkOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
