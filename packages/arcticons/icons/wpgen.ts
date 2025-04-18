import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsWpgenIcon],svg[arcticons-wpgen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.32 12.12a4.47 4.47 0 1 1-4.47 4.47a4.47 4.47 0 0 1 4.47-4.47M20 21l7.22 7.22a.7.7 0 0 0 .99.01l.01-.01l1.38-1.38a.71.71 0 0 1 1 0l7.81 7.81a.7.7 0 0 1-.5 1.2H10.08a.7.7 0 0 1-.58-1.1L19 21.13a.7.7 0 0 1 .98-.146Zm22.52-6.5v-7a2 2 0 0 0-2-2H33.5m-19 0H7.48a2 2 0 0 0-2 2v7m28.02 28h7.02a2 2 0 0 0 2-2v-7m-37.04 0v7a2 2 0 0 0 2 2h7.02"></svg:path>`,
})
export class ArcticonsWpgenIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
