import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightResponsiveLayoutIcon],svg[material-symbols-light-responsive-layout-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 20V9H9.5V4H20v16zm-5.5 0V10H14v10zM4 20V10h4.5v10z"></svg:path>`,
})
export class MaterialSymbolsLightResponsiveLayoutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
