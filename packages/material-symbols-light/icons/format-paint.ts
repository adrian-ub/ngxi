import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFormatPaintIcon],svg[material-symbols-light-format-paint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.962 21q-.413 0-.707-.294T9.962 20v-5.212H6.635q-.69 0-1.163-.462Q5 13.863 5 13.192V6.596q0-1.07.774-1.833T7.634 4H19v9.192q0 .672-.486 1.134q-.486.463-1.168.463H14.02V20q0 .413-.294.706T13.02 21zM6 10.462h12V5h-1.634v3.712h-1V5h-1.847v1.962h-1V5H7.635q-.69 0-1.163.453Q6 5.906 6 6.596z"></svg:path>`,
})
export class MaterialSymbolsLightFormatPaintIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
