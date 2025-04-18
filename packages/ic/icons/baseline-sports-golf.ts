import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icBaselineSportsGolfIcon],svg[ic-baseline-sports-golf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 16c3.87 0 7-3.13 7-7s-3.13-7-7-7s-7 3.13-7 7s3.13 7 7 7m0-12c2.76 0 5 2.24 5 5s-2.24 5-5 5s-5-2.24-5-5s2.24-5 5-5"></svg:path><svg:circle cx="10" cy="8" r="1" fill="currentColor"></svg:circle><svg:circle cx="14" cy="8" r="1" fill="currentColor"></svg:circle><svg:circle cx="12" cy="6" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M7 19h2c1.1 0 2 .9 2 2v1h2v-1c0-1.1.9-2 2-2h2v-2H7z"></svg:path>`,
})
export class IcBaselineSportsGolfIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
