import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNokiaLearnIcon],svg[arcticons-nokia-learn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.897 32.205a8.205 8.205 0 0 1 0-16.41H43.5v-4.32H17.025C10.108 11.475 4.5 17.083 4.5 24s5.608 12.525 12.525 12.525H43.5v-4.32z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.191 22.748a2.165 2.165 0 1 1 0-4.33H43.5v4.33zm0 6.833a2.165 2.165 0 1 1 0-4.33H43.5v4.33z"></svg:path>`,
})
export class ArcticonsNokiaLearnIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
