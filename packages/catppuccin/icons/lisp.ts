import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinLispIcon],svg[catppuccin-lisp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#ed8796" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.5 5.06v6.07C.5 12.41.82 13 2.27 13h5.6c1.04 0 1.63-.51 1.63-1.62c0-.85-.2-1.88-1.5-1.88h-.36C6.4 9.5 6 8.77 6 7.75C6 6.81 6.8 6 7.49 6h2.68"></svg:path><svg:path d="M3.5 10.5V4.99C3.5 3.89 3.62 3 5 3h9c.97 0 1.5.99 1.5 1.63c.12 1.55-.98 1.62-2.1 2.16c-.58.26-1.4.52-1.4.98V11"></svg:path></svg:g>`,
})
export class CatppuccinLispIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
