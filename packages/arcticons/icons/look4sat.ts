import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLook4satIcon],svg[arcticons-look4sat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M40.47 19.28A23.42 23.42 0 0 1 28.7 7.8m.46-.21l-23.43 11m34.74.69L31 40.85"></svg:path><svg:circle cx="34.54" cy="13.69" r="8.18" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31 21.22L14 42.27M26.2 14l-10.36 7.07"></svg:path>`,
})
export class ArcticonsLook4satIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
