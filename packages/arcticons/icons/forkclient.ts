import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsForkclientIcon],svg[arcticons-forkclient-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m30.22 17.78l7.06-7.06M25 12.56l7.07-7.06M35.44 23l7.06-7.07M35.44 23A7.38 7.38 0 0 1 25 12.56M5.5 42.5L25 23"></svg:path>`,
})
export class ArcticonsForkclientIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
