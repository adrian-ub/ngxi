import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightKingBedSharpIcon],svg[material-symbols-light-king-bed-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.77 18h-.54l-.38-2H3v-5h2V7h14v4h2v5h-.85l-.38 2h-.54l-.38-2H5.15zm7.73-7H18V8h-5.5zM6 11h5.5V8H6z"></svg:path>`,
})
export class MaterialSymbolsLightKingBedSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
