import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNetshoesIcon],svg[arcticons-netshoes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m43.5 11.593l-3.287 14.742c-1.784 8.004-6.913 11.632-11.55 9.432C25.229 34.138 24.59 28.413 24 24s-1.23-10.138-4.663-11.767c-4.637-2.2-9.766 1.428-11.55 9.432L4.5 36.407"></svg:path>`,
})
export class ArcticonsNetshoesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
