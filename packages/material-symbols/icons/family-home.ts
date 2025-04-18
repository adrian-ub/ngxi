import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFamilyHomeIcon],svg[material-symbols-family-home-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 3l11 8.25l-1.2 1.6L20 11.5V21H4v-9.5l-1.8 1.35l-1.2-1.6zm-4.65 9.05q0 1.325 1.425 2.825T12 18q1.8-1.625 3.225-3.125t1.425-2.825q0-1.1-.75-1.825T14.1 9.5q-.65 0-1.188.263T12 10.45q-.375-.425-.937-.687T9.9 9.5q-1.05 0-1.8.725t-.75 1.825"></svg:path>`,
})
export class MaterialSymbolsFamilyHomeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
