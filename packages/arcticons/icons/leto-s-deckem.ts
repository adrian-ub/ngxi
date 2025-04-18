import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLetoSDeckemIcon],svg[arcticons-leto-s-deckem-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14 25.5c-.816 8 1.76 17.001 10 20c.255-5.74-.006-17.999-10-20m10 20V24M14 14c0 5.523 4.477 10 10 10s10-4.477 10-10z"></svg:path><svg:circle cx="24" cy="9" r="1.75" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="31" cy="9" r="1.75" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="17" cy="9" r="1.75" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17 10.75V14m7-3.25V14m7-3.25V14m3 11.5c.816 8-1.76 17.001-10 20c-.255-5.74.006-17.999 10-20"></svg:path>`,
})
export class ArcticonsLetoSDeckemIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
