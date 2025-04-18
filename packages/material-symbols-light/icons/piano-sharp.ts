import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPianoSharpIcon],svg[material-symbols-light-piano-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20V4h16v16zm1-1h3.654v-4.808h-1.25V5H5zm10.346 0H19V5h-2.404v9.192h-1.25zM9.54 19h4.923v-4.808h-1.25V5H10.79v9.192H9.54z"></svg:path>`,
})
export class MaterialSymbolsLightPianoSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
