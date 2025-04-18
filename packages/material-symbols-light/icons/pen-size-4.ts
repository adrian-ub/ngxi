import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPenSize4Icon],svg[material-symbols-light-pen-size-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.071 17.929q-.59-.59-.59-1.433t.59-1.425l9-9q.582-.59 1.425-.59t1.433.59t.59 1.433t-.59 1.425l-9 9q-.582.59-1.425.59t-1.433-.59"></svg:path>`,
})
export class MaterialSymbolsLightPenSize4Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
