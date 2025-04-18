import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBrainlyIcon],svg[arcticons-brainly-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-miterlimit="5.5" d="m9.332 8.28l22.827-4.172M15.896 43.841l22.827-4.173"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m26.617 23.054l-9.242 1.696m9.242-1.696a4.482 4.482 0 0 1 5.601 4.403a6.956 6.956 0 0 1-5.601 6.458l-9.242 1.696V13.889l9.242-1.696a4.482 4.482 0 0 1 5.601 4.403a6.956 6.956 0 0 1-5.601 6.458m-10.836-8.873l1.594-.292m-1.594 22.014l1.594-.293"></svg:path>`,
})
export class ArcticonsBrainlyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
