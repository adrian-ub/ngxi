import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPaddingSharpIcon],svg[material-symbols-light-padding-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.346 8.885h1.539V7.346H7.346zm3.885 0h1.538V7.346h-1.538zm3.885 0h1.538V7.346h-1.538zM4 20V4h16v16z"></svg:path>`,
})
export class MaterialSymbolsLightPaddingSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
