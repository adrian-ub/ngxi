import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsChartrIcon],svg[arcticons-chartr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 5.5v6h4.819l20.73 28.412c.948 1.31 2.457 2.588 5.1 2.588h6.35v-6h-5.651c-1.165 0-1.903-.817-2.971-2.309L28.933 27H42.5v-6H24.593l-6.869-9.5H42.5v-6z"></svg:path>`,
})
export class ArcticonsChartrIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
