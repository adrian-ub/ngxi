import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBudlistIcon],svg[arcticons-budlist-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.926 7.082h25.39V43.5H8.926z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m34.31 7.07l2.175.001l2.589 34.345l-4.744 2.079M13.29 10.1l.004-4.314l.79-1.245l15.52-.041l.75 1.368l.056 4.25m-17.597 5.433h17.096v16.428H12.813z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m16.993 24.449l2.62 2.62l6.023-6.022"></svg:path>`,
})
export class ArcticonsBudlistIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
