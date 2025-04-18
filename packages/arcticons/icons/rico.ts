import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRicoIcon],svg[arcticons-rico-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.289 18.353c-3.155-3.119-8.269-3.119-11.424 0a7.923 7.923 0 0 0 0 11.294c3.155 3.119 8.269 3.119 11.423 0l11.423-11.294c3.155-3.119 8.269-3.119 11.424 0a7.923 7.923 0 0 1 0 11.294c-3.155 3.119-8.269 3.119-11.423 0L24 24"></svg:path>`,
})
export class ArcticonsRicoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
