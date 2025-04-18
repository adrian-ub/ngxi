import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBrokenImageSharpIcon],svg[material-symbols-light-broken-image-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20v-7.292l2 2l4-4l4 4l4-4l2 2V20zM4 4h16v7.287l-2-2l-4 4l-4-4l-4 4l-2-2z"></svg:path>`,
})
export class MaterialSymbolsLightBrokenImageSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
