import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFormatPaintSharpIcon],svg[material-symbols-light-format-paint-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.962 21v-6.212H5V6.596q0-1.07.774-1.833T7.634 4H19v10.789h-4.98V21zM6 10.462h12V5h-1.634v3.712h-1V5h-1.847v1.962h-1V5H7.635q-.69 0-1.163.453Q6 5.906 6 6.596z"></svg:path>`,
})
export class MaterialSymbolsLightFormatPaintSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
