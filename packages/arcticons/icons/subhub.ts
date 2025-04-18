import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSubhubIcon],svg[arcticons-subhub-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m19.3 4.5l21.1 12.267v13.261L19.52 43.5L7.6 37.087V11.412Zm10.918 32.043L7.599 23.853m22.593-12.795l.026 25.485M7.6 23.853l22.592-12.795M18.406 17.75l.233 12.229m11.3-6.129l-11.3 6.129"></svg:path>`,
})
export class ArcticonsSubhubIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
