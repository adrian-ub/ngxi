import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNubankIcon],svg[arcticons-nubank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.55 33.49H4.5V17.11a2.6 2.6 0 0 1 2.6-2.6h10.36v19h4.85V15.25a5.2 5.2 0 0 0-5.19-5.19h-4a2.59 2.59 0 0 0-2.6 2.6Zm26.9-18.98h6v16.38a2.6 2.6 0 0 1-2.6 2.6H30.54v-19h-4.85v18.26a5.2 5.2 0 0 0 5.19 5.19h4a2.59 2.59 0 0 0 2.6-2.6Z"></svg:path>`,
})
export class ArcticonsNubankIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
