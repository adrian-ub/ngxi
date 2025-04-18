import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsInmageIcon],svg[arcticons-inmage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M24 2.5A21.5 21.5 0 1 1 2.5 24A21.503 21.503 0 0 1 24 2.5Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M16.517 15.499h14.966a1.02 1.02 0 0 1 1.018 1.018v14.966a1.02 1.02 0 0 1-1.018 1.018H16.517a1.02 1.02 0 0 1-1.018-1.018V16.517a1.02 1.02 0 0 1 1.018-1.018Z"></svg:path>`,
})
export class ArcticonsInmageIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
