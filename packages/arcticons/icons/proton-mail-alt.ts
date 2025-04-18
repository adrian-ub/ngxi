import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsProtonMailAltIcon],svg[arcticons-proton-mail-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 4.5A15.5 15.5 0 0 1 39.5 20v21.5a2 2 0 0 1-2 2h-27a2 2 0 0 1-2-2V20A15.5 15.5 0 0 1 24 4.5"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.5 27L22 35.38a4 4 0 0 0 4.26 0L39.5 27M24 10.74a9.43 9.43 0 0 1 9.43 9.43v1.73h0h-18.86h0v-1.73A9.43 9.43 0 0 1 24 10.74"></svg:path>`,
})
export class ArcticonsProtonMailAltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
