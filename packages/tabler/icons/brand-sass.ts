import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandSassIcon],svg[tabler-brand-sass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0"></svg:path><svg:path d="M12 10.523c2.46-.826 4-.826 4-2.155c0-1.366-1.347-1.366-2.735-1.366c-1.91 0-3.352.49-4.537 1.748c-.848.902-1.027 2.449-.153 3.307c.973.956 3.206 1.789 2.884 3.493c-.233 1.235-1.469 1.823-2.617 1.202c-.782-.424-.454-1.746.626-2.512s2.822-.992 4.1-.24c.98.575 1.046 1.724.434 2.193"></svg:path></svg:g>`,
})
export class TablerBrandSassIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
