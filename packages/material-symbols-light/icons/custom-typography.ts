import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCustomTypographyIcon],svg[material-symbols-light-custom-typography-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 21v-5h1v2H20v1h-7.5v2zM4 19v-1h5.116v1zm3.444-4.615H8.5l1.062-3.018h4.882l1.056 3.018h1.056L12.44 3h-.88zm2.448-3.954l2.058-5.802h.1l2.058 5.802z"></svg:path>`,
})
export class MaterialSymbolsLightCustomTypographyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
