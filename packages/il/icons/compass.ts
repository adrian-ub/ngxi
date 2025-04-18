import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ilCompassIcon],svg[il-compass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M503 217q14-5 25 5t5 25l-69 184q-11 30-41 41l-185 69q-14 5-24-6t-6-24l70-184q11-30 40-41zM403 412q14-14 14-33t-14-33t-32-14t-33 14t-14 33t14 33t33 14t32-14M371 8q76 0 144 29t118 79t79 118t29 145t-29 144t-79 118t-118 80t-144.5 29T227 721t-118-80t-80-118T0 379t29-145t80-118t118-79T371 8m0 649q57 0 108-22t89-60t59-88t21.5-108T627 270t-59-88t-89-59t-109-22t-107 22t-88 59t-60 88t-22 108.5T115 487t60 88t88 60t108 22"></svg:path>`,
})
export class IlCompassIcon {
  readonly viewBox = input("0 0 750 850")
  readonly width = input("0.89em")
  readonly height = input("1em")
}
