import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsWattsUpIcon],svg[arcticons-watts-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.153 12.229v-4.8A3.17 3.17 0 0 1 16.33 4.25h15.338a3.17 3.17 0 0 1 3.178 3.179v4.8m.001 23.542v4.8a3.17 3.17 0 0 1-3.178 3.179H16.331a3.17 3.17 0 0 1-3.178-3.179v-4.8m21.694-17.203v9.094c0 1.86-1.127 2.32-2.906 1.03L24 22.931l-7.941 5.761c-1.779 1.29-2.906.83-2.906-1.03v-9.094"></svg:path>`,
})
export class ArcticonsWattsUpIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
