import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsListenIcon],svg[arcticons-listen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.33 30.158V12.377a2 2 0 0 1 2-2h11.85m11.49 7.465v17.781a2 2 0 0 1-2 2H22.82"></svg:path>`,
})
export class ArcticonsListenIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
