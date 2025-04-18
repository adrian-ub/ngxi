import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMyetrainingIcon],svg[arcticons-myetraining-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m39.077 26.715l-2.195 5.279l-32.418.123l2.197-5.285m2.261-5.433l2.19-5.282l32.352.03l-2.192 5.283"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m8.922 21.399l32.35.03l-2.195 5.286l-32.416.116z"></svg:path>`,
})
export class ArcticonsMyetrainingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
