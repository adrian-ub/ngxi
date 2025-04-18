import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiTwitterBoxIcon],svg[zmdi-twitter-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M335 159q22-18 28-30q-13 6-31 9q18-13 24-32q-20 11-37 14q-12-14-31-16.5t-35.5 5t-26.5 25t-5 38.5q-67-4-118-59q-11 20-4.5 43.5T120 189q-11-1-24-7q1 43 44 57q-12 3-24 1q12 36 53 40q-15 13-39 19.5T85 303q45 28 92 26q70-3 113.5-49.5T335 159M384 3q18 0 30.5 12.5T427 45v342q0 17-12.5 29.5T384 429H43q-18 0-30.5-12.5T0 387V45q0-17 12.5-29.5T43 3z"></svg:path>`,
})
export class ZmdiTwitterBoxIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}
