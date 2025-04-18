import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDoubtnutIcon],svg[arcticons-doubtnut-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.06 24.428a4.369 4.369 0 1 1-4.374 4.373a4.37 4.37 0 0 1 4.373-4.373M24.62 5.283l18.88 7.465m-5.998-2.125l-2.125 5.198a13.44 13.44 0 0 0-8.308-3.547l2.125-5.2m11.329 4.576l1.66 5.928"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.193 16.26h3.381l-.061 12.998a13.506 13.506 0 1 1-10.547-13.226v3.162a10.02 10.02 0 1 0 7.289 10.028Z"></svg:path>`,
})
export class ArcticonsDoubtnutIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
