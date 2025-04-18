import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsModoIcon],svg[arcticons-modo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 42.459V27.022M5.5 5.5L24 32.48L42.5 5.557V42.5"></svg:path>`,
})
export class ArcticonsModoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
