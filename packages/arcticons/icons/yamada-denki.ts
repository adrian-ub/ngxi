import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsYamadaDenkiIcon],svg[arcticons-yamada-denki-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.5 5.5h35v37h-35z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m35.586 20.684l-9.629 9.629a2.4 2.4 0 0 0-.707 1.707v5.48a1 1 0 0 0 1 1H36a1 1 0 0 0 1-1h0V21.27a.828.828 0 0 0-1.414-.586M11 21.27V37.5a1 1 0 0 0 1 1h9.75a1 1 0 0 0 1-1v-5.48c0-.64-.254-1.255-.707-1.708l-9.629-9.628a.828.828 0 0 0-1.414.585zm12.293 6.753l-8.908-8.908L24 9.5l8.908 8.908a1 1 0 0 1 0 1.414l-8.2 8.201a1 1 0 0 1-1.415 0"></svg:path>`,
})
export class ArcticonsYamadaDenkiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
