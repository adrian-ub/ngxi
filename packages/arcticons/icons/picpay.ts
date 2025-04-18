import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPicpayIcon],svg[arcticons-picpay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 12.299v17.768h11.569a11.868 11.868 0 0 0 0-23.736h-5.601M5.5 41.669V30.067M31.758 6.331H42.5v10.742H31.758z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.339 9.912h3.581v3.581h-3.581z"></svg:path>`,
})
export class ArcticonsPicpayIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
