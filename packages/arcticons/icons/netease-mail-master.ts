import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNeteaseMailMasterIcon],svg[arcticons-netease-mail-master-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m17.666 7.354l-3.527 25.299M7.945 15.117L5.5 32.653m37-17.536l-2.445 17.536M25.222 15.117l-2.445 17.536m11.084-17.536l-3.559 25.529"></svg:path>`,
})
export class ArcticonsNeteaseMailMasterIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
