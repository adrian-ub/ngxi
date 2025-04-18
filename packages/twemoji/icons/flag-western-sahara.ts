import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiFlagWesternSaharaIcon],svg[twemoji-flag-western-sahara-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#141414" d="M32 5H4a4 4 0 0 0-4 4v4.5h36V9a4 4 0 0 0-4-4"></svg:path><svg:path fill="#007A3D" d="M0 27a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4v-4.5H0z"></svg:path><svg:path fill="#EEE" d="M0 13.5h36v9H0z"></svg:path><svg:path fill="#C4111B" d="M1.129 6.223A3.98 3.98 0 0 0 0 9v18c0 1.08.433 2.057 1.129 2.777L12 18z"></svg:path><svg:g fill="#C4111B"><svg:path d="M17.894 18.033a3.47 3.47 0 0 1 2.817-3.405a3.467 3.467 0 1 0-.001 6.81a3.466 3.466 0 0 1-2.816-3.405"></svg:path><svg:path d="m19.13 20.132l1.478-1.057l1.467 1.073l-.548-1.732L23 17.353l-1.817-.014l-.556-1.73l-.575 1.724l-1.817-.006l1.462 1.079z"></svg:path></svg:g>`,
})
export class TwemojiFlagWesternSaharaIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
