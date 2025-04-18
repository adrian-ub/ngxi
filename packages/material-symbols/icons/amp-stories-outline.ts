import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsAmpStoriesOutlineIcon],svg[material-symbols-amp-stories-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 20V4h10v16zm-4-2V6h2v12zm16 0V6h2v12zM9 18h6V6H9zm0 0V6z"></svg:path>`,
})
export class MaterialSymbolsAmpStoriesOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
