import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilGlassIcon],svg[uil-glass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.75 2.33A1 1 0 0 0 19 2H5a1 1 0 0 0-.75.33a1 1 0 0 0-.25.78l1.8 16.22a3 3 0 0 0 3 2.67h6.42a3 3 0 0 0 3-2.67L20 3.11a1 1 0 0 0-.25-.78M16.2 19.11a1 1 0 0 1-1 .89H8.79a1 1 0 0 1-1-.89L6.78 10h10.44ZM17.44 8H6.56l-.44-4h11.76Z"></svg:path>`,
})
export class UilGlassIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
