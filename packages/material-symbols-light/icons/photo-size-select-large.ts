import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPhotoSizeSelectLargeIcon],svg[material-symbols-light-photo-size-select-large-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.616 20q-.667 0-1.141-.475T4 18.386V7.692h12.308V20zM6 18h8.23l-2.784-3.692l-2.138 2.884l-1.331-1.765zM5.23 5.23H4q0-.507.362-.868T5.23 4zm2.462 0V4h1.231v1.23zm3.693 0V4h1.23v1.23zm3.692 0V4h1.23v1.23zm3.692 0V4q.508 0 .87.362T20 5.23zm0 13.54H20q0 .507-.362.869T18.77 20zm0-2.462v-1.231H20v1.23zm0-3.693v-1.23H20v1.23zm0-3.692v-1.23H20v1.23z"></svg:path>`,
})
export class MaterialSymbolsLightPhotoSizeSelectLargeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
