import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNordnetIcon],svg[arcticons-nordnet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.15 17.35h10.1v13.3l11.65-13.3h5.6l-11.65 13.3h-10.1v-13.3L10.1 30.65H4.5Zm0 0"></svg:path>`,
})
export class ArcticonsNordnetIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
