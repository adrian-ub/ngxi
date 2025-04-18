import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsResponsiveLayoutIcon],svg[material-symbols-responsive-layout-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 21V8H9.5V3H21v18zm-6.5 0V10H14v11zM3 21V10h4.5v11z"></svg:path>`,
})
export class MaterialSymbolsResponsiveLayoutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
