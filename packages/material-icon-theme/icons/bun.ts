import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeBunIcon],svg[material-icon-theme-bun-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FFF8E1" d="M30 17.045a9.8 9.8 0 0 0-.32-2.306l-.004.034a11.2 11.2 0 0 0-5.762-6.786c-3.495-1.89-5.243-3.326-6.8-3.811h.003c-1.95-.695-3.949.82-5.825 1.927c-4.52 2.481-9.573 5.45-9.28 11.417c.008-.029.017-.052.026-.08a9.97 9.97 0 0 0 3.934 7.257l-.01-.006C13.747 31.473 30.05 27.292 30 17.045"></svg:path><svg:path fill="#37474f" d="M19.855 20.236A.8.8 0 0 0 19.26 20h-6.514a.8.8 0 0 0-.596.236a.51.51 0 0 0-.137.463a4.37 4.37 0 0 0 1.641 2.339a4.2 4.2 0 0 0 2.349.926a4.2 4.2 0 0 0 2.343-.926a4.37 4.37 0 0 0 1.642-2.339a.5.5 0 0 0-.132-.463Z"></svg:path><svg:ellipse cx="22.5" cy="18.5" fill="#f8bbd0" rx="2.5" ry="1.5"></svg:ellipse><svg:ellipse cx="9.5" cy="18.5" fill="#f8bbd0" rx="2.5" ry="1.5"></svg:ellipse><svg:circle cx="10" cy="16" r="2" fill="#37474f"></svg:circle><svg:circle cx="22" cy="16" r="2" fill="#37474f"></svg:circle><svg:path fill="#455a64" d="M9.996 18A2 2 0 1 0 8 15.996V16a2 2 0 0 0 1.996 2"></svg:path><svg:circle cx="9" cy="15" r="1" fill="#FAFAFA"></svg:circle><svg:circle cx="21" cy="15" r="1" fill="#FAFAFA"></svg:circle>`,
})
export class MaterialIconThemeBunIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
