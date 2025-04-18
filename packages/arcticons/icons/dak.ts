import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDakIcon],svg[arcticons-dak-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.5 19.497L24 5.987L5.5 19.497m33.105 5.477v15.592a1.447 1.447 0 0 1-1.447 1.447H10.842a1.447 1.447 0 0 1-1.447-1.447V24.974"></svg:path>`,
})
export class ArcticonsDakIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
