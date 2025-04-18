import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightNavigationOutlineIcon],svg[material-symbols-light-navigation-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.962 19.5l-.462-.423L12 4.462l6.5 14.615l-.462.423L12 16.923zM7.1 17.9l4.9-2.1l4.9 2.1l-4.9-11zm4.9-2.1"></svg:path>`,
})
export class MaterialSymbolsLightNavigationOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
