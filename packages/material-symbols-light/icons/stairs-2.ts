import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightStairs2Icon],svg[material-symbols-light-stairs-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 18v-1h5.664v-5.5h5.663V6H21v1h-5.663v5.5H9.673V18z"></svg:path>`,
})
export class MaterialSymbolsLightStairs2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
