import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsYaautoIcon],svg[arcticons-yaauto-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.14 11a5.91 5.91 0 0 1 9.72 0L42.5 30.71a5.62 5.62 0 0 1-7.33 8.13l-7.31-4a8 8 0 0 0-7.71 0l-7.32 4a5.62 5.62 0 0 1-7.33-8.13Z"></svg:path>`,
})
export class ArcticonsYaautoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
