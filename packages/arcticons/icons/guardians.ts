import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGuardiansIcon],svg[arcticons-guardians-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.051 4.765c-2.106 1.783-3.292 4.187-3.303 6.694c.01 2.498 1.19 4.895 3.283 6.677c2.096-1.782 3.275-4.178 3.286-6.677c0-2.503-1.173-4.906-3.266-6.694m-1.991 38.47V26.986c0-5.75-5.285-13.56-13.56-13.56v16.25c0 8.922 8.234 13.56 13.56 13.56m3.88-.001V26.986c0-5.75 5.286-13.56 13.56-13.56v16.25c0 8.922-8.234 13.56-13.56 13.56"></svg:path>`,
})
export class ArcticonsGuardiansIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
