import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightVo2MaxSharpIcon],svg[material-symbols-light-vo2-max-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.923 19v-5.384h3.885V19zm.885-.885h2.115V14.5h-2.115zM18.192 21v-3.134h3.039V16.5h-3.039v-.885h3.924v3.135h-3.039v1.366h3.039V21zM2 19V9.833l6.654-5.217V2h1v2.596l6.654 5.25v2.385h-4.77V19h-1V6.608L9.155 5.48L7.75 6.608L7.762 19z"></svg:path>`,
})
export class MaterialSymbolsLightVo2MaxSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
