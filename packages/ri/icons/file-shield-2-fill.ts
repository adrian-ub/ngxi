import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riFileShield2FillIcon],svg[ri-file-shield-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 10H11v7.382c0 1.563.777 3.023 2.074 3.892l1.083.726H3.993A.993.993 0 0 1 3 21.008V2.992C3 2.455 3.447 2 3.998 2h11.999L21 7zm-8 2h8v5.382c0 .897-.446 1.734-1.187 2.23L17 21.499l-2.812-1.885A2.68 2.68 0 0 1 13 17.383z"></svg:path>`,
})
export class RiFileShield2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
