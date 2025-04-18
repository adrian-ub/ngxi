import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiBuildingIcon],svg[mynaui-building-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M14.7 2c1.68 0 2.52 0 3.162.34a3.06 3.06 0 0 1 1.311 1.359c.327.665.327 1.536.327 3.279v10.044c0 1.743 0 2.614-.327 3.28a3.06 3.06 0 0 1-1.311 1.359C17.22 22 16.38 22 14.7 22H9.3c-1.68 0-2.52 0-3.162-.34a3.06 3.06 0 0 1-1.311-1.359c-.327-.665-.327-1.536-.327-3.279V6.978c0-1.743 0-2.614.327-3.28A3.06 3.06 0 0 1 6.138 2.34C6.78 2 7.62 2 9.3 2z"></svg:path><svg:path d="M9.5 21v-5.5a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2V21M10 6H8m2 4H8m8-4h-2m2 4h-2"></svg:path></svg:g>`,
})
export class MynauiBuildingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
