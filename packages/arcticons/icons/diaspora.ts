import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDiasporaIcon],svg[arcticons-diaspora-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19 4.49h10v13.08l12.45-4L44.5 23l-12.45 4l7.67 10.57l-8 5.87L24 32.94l-7.67 10.57l-8-5.87L16 27.07L3.5 23l3.09-9.5l12.45 4Z"></svg:path>`,
})
export class ArcticonsDiasporaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
