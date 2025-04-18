import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLinkeyeIcon],svg[arcticons-linkeye-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.719 14.719L5.44 24l9.28 9.281L24 24ZM24 24l9.281 9.281L42.561 24l-9.28-9.281Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m12.304 24l2.415-2.415L17.135 24l-2.416 2.415Zm18.561 0l2.415-2.415L35.696 24l-2.416 2.415Z"></svg:path>`,
})
export class ArcticonsLinkeyeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
