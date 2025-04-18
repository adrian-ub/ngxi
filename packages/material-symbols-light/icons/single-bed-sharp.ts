import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSingleBedSharpIcon],svg[material-symbols-light-single-bed-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.77 18h-.54l-.38-2H5v-5h2V7h10v4h2v5h-.85l-.38 2h-.54l-.38-2h-9.7zm5.73-7H16V8h-3.5zM8 11h3.5V8H8z"></svg:path>`,
})
export class MaterialSymbolsLightSingleBedSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
