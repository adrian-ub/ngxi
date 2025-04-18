import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsViewModuleSharpIcon],svg[material-symbols-view-module-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.675 11.5V5H21v6.5zm-6.325 0V5h5.325v6.5zm-6.325 0V5H8.35v6.5zm0 7.5v-6.5H8.35V19zm6.325 0v-6.5h5.325V19zm6.325 0v-6.5H21V19z"></svg:path>`,
})
export class MaterialSymbolsViewModuleSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
