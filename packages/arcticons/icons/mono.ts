import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMonoIcon],svg[arcticons-mono-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 42.5A9.25 9.25 0 0 0 24 24ZM24 24a9.25 9.25 0 0 1 0-18.5Zm18.5 0A9.25 9.25 0 0 0 24 24ZM24 24a9.25 9.25 0 0 1-18.5 0Z"></svg:path>`,
})
export class ArcticonsMonoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
