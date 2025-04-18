import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsApplicationsinfoIcon],svg[arcticons-applicationsinfo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.12 12.79c6.191 0 11.21 5.019 11.21 11.21s-5.019 11.21-11.21 11.21S7.91 30.191 7.91 24s5.019-11.21 11.21-11.21"></svg:path><svg:circle cx="19.12" cy="18.22" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.12 22.08v8.45M8.5 8.5a4 4 0 0 0-4 4v23a4 4 0 0 0 4 4h31a4 4 0 0 0 4-4V22.678a4 4 0 0 0-1.172-2.828L32.152 9.672A4 4 0 0 0 29.324 8.5z"></svg:path>`,
})
export class ArcticonsApplicationsinfoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
