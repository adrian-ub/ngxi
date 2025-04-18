import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsApexLegendsIcon],svg[arcticons-apex-legends-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24 20.039l8.714 15.264H26.75l10.33 7.088l5.42-4.378L24 5.609L5.5 38.013l5.42 4.378l10.33-7.088h-5.964z"></svg:path>`,
})
export class ArcticonsApexLegendsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
