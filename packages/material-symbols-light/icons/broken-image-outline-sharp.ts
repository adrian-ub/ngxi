import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBrokenImageOutlineSharpIcon],svg[material-symbols-light-broken-image-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20V4h16v16zm2-6.714l4-4l4 4l4-4l1 1V5H5v7.287zM5 19h14v-7.292l-1-1l-4 4l-4-4l-4 4l-1-1zm0 0v-7.292v1V5z"></svg:path>`,
})
export class MaterialSymbolsLightBrokenImageOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
