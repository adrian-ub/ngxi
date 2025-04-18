import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsAtmIcon],svg[material-symbols-atm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.375 15v-4.5h-2.25V9h6v1.5h-2.25V15zM2 15v-5q0-.425.288-.712T3 9h3q.425 0 .713.288T7 10v5H5.5v-1.5h-2V15zm1.5-3h2v-1.5h-2zm12 3v-5q0-.425.288-.712T16.5 9H21q.425 0 .713.288T22 10v5h-1.5v-4.5h-1V14H18v-3.5h-1V15z"></svg:path>`,
})
export class MaterialSymbolsAtmIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
