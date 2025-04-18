import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsInfluenceIcon],svg[arcticons-influence-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.043 19.219v9.636m5.919 0v-9.636l6.384 9.636v-9.636M13.154 35.36L5.5 24l8.126-11.675M42.5 28.497l-5.601 12.937l-15.069-1.103m.869-32.581l13.884-1.184l5.838 12.622"></svg:path>`,
})
export class ArcticonsInfluenceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
