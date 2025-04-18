import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsApniKakshaIcon],svg[arcticons-apni-kaksha-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m6.068 42.5l13.012-37l11.695 36.551M12.926 22.998l20.272-8.914m-8.271 9.692l17.005-7.957"></svg:path>`,
})
export class ArcticonsApniKakshaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
