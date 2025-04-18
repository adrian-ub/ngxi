import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGouvcheckIcon],svg[arcticons-gouvcheck-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.944 14.735A14.8 14.8 0 0 0 24 13.889c-8.177 0-14.806 6.629-14.806 14.806S15.824 43.5 24 43.5s14.806-6.629 14.806-14.806c0-2.612-.677-5.066-1.864-7.196"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m38.446 4.5l-13.94 32.717l-6.276-22.158"></svg:path>`,
})
export class ArcticonsGouvcheckIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
