import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEufylifeIcon],svg[arcticons-eufylife-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M45.5 24A21.5 21.5 0 1 1 24 2.5V24"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.523 2.535a4.125 4.125 0 0 0-3.204 6.73h0l6.615 7.764l6.55-7.687l.033-.037l.032-.04h0a4.129 4.129 0 1 0-6.615-4.924a4.12 4.12 0 0 0-3.407-1.806Z"></svg:path>`,
})
export class ArcticonsEufylifeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
