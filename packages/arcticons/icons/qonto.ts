import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsQontoIcon],svg[arcticons-qonto-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.485 42.5Q25.926 40.85 24 24q16.253 3.266 18.486 18.5zm.015-37Q40.266 20.75 24 24Q25.94 7.15 42.5 5.5m-36.984 37Q22.074 40.85 24 24Q7.747 27.266 5.514 42.5zM5.5 5.5Q7.734 20.75 24 24Q22.06 7.15 5.5 5.5"></svg:path>`,
})
export class ArcticonsQontoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
