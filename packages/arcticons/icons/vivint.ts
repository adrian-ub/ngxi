import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsVivintIcon],svg[arcticons-vivint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m17.55 8.83l-12 10.92a3.24 3.24 0 0 0-1.06 2.4v16.22a1.08 1.08 0 0 0 1.08 1.08H31a1.08 1.08 0 0 0 1.08-1.08V22.15a3.24 3.24 0 0 0-1.08-2.4L19 8.83a1.09 1.09 0 0 0-1.45 0"></svg:path><svg:circle cx="39.18" cy="35.12" r="4.32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsVivintIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
