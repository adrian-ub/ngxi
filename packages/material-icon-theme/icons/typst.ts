import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeTypstIcon],svg[material-icon-theme-typst-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#0097a7" d="M21.98 24.84A10.8 10.8 0 0 1 19.72 26a4.3 4.3 0 0 1-1.46.3a2.4 2.4 0 0 1-1.93-.64c-.36-.42-.33-1.25-.33-2.48V14h4v-4h-4V2l-6 2v6H8v4h2v9.91q0 3.405 1.59 4.77A6.64 6.64 0 0 0 15.94 30a4 4 0 0 0 .47-.03c1.54-.15 3.4-1.08 5.59-2.77c.31-.24.63-.49.95-.76Z"></svg:path>`,
})
export class MaterialIconThemeTypstIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
