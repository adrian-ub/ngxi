import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAmpStoriesOutlineIcon],svg[material-symbols-light-amp-stories-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 19V5h8v14zm-3.385-2V7h1v10zm13.77 0V7h1v10zM9 18h6V6H9zm0 0V6z"></svg:path>`,
})
export class MaterialSymbolsLightAmpStoriesOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
