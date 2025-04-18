import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsKoleoIcon],svg[arcticons-koleo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" d="M16.8 43.5a5 5 0 0 1-3.536-8.535l10.931-10.932l-10.997-10.998a5 5 0 0 1 7.071-7.07l14.533 14.533a5 5 0 0 1 0 7.07L20.335 42.035a5 5 0 0 1-3.536 1.465Z"></svg:path>`,
})
export class ArcticonsKoleoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
