import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsViewQuiltSharpIcon],svg[material-symbols-view-quilt-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.325 11.5V5H21v6.5zm6.35 7.5v-6.5H21V19zm-6.35 0v-6.5h5.35V19zM3 19V5h5.325v14z"></svg:path>`,
})
export class MaterialSymbolsViewQuiltSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
