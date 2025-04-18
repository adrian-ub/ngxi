import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[biStravaIcon],svg[bi-strava-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.731 0L2 9.125h2.788L6.73 5.497l1.93 3.628h2.766zm4.694 9.125l-1.372 2.756L8.66 9.125H6.547L10.053 16l3.484-6.875z"></svg:path>`,
})
export class BiStravaIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
