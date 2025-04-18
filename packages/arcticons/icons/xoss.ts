import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsXossIcon],svg[arcticons-xoss-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.327 24.04L36.547 5.5H42.5v5.731L29.897 24.04L42.5 36.853V42.5h-5.7zM11.117 5.5l10.245 10.236l-5.602 5.746L5.5 11.232V5.5zM5.5 36.797V42.5h5.813l10.13-10.156l-5.784-5.788z"></svg:path>`,
})
export class ArcticonsXossIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
