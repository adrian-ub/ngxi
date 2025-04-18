import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsClosedCaptionDisabledSharpIcon],svg[material-symbols-closed-caption-disabled-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 20V5.825L.675 3.5L2.1 2.075l19.8 19.8l-1.425 1.425l-3.3-3.3zm18-1.875L17.875 15H18v-2h-1.5v.5h-.125L14.5 11.625V10.5h2v.5H18V9h-5v1.125L6.875 4H21zM6 15h5v-1.175L10.175 13H9.5v.5h-2v-3.175L6.375 9.2H6z"></svg:path>`,
})
export class MaterialSymbolsClosedCaptionDisabledSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
