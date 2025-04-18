import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsORelaxIcon],svg[arcticons-o-relax-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12 21.794c3.906 0 6.035 2.498 8 4.768s4.094 4.768 8 4.768m-8-14.66c3.906 0 6.035 2.499 8 4.768c1.965 2.27 4.094 4.768 8 4.768"></svg:path><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsORelaxIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
