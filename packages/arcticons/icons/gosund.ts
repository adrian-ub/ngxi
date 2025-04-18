import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGosundIcon],svg[arcticons-gosund-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.5 23.41V20.8a5.95 5.95 0 0 0-2.316-4.712L28.076 6.75a6.675 6.675 0 0 0-8.152 0L7.816 16.088A5.95 5.95 0 0 0 5.5 20.799v13.143c0 5.696 3.001 8.697 6.703 8.697h23.594a6.703 6.703 0 0 0 6.703-6.703h0a6.703 6.703 0 0 0-6.703-6.703H28.2"></svg:path>`,
})
export class ArcticonsGosundIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
