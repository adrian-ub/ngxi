import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiMoodBadIcon],svg[zmdi-mood-bad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213.5 3q88.5 0 151 62.5T427 216t-62.5 150.5t-151 62.5t-151-62.5T0 216T62.5 65.5T213.5 3m0 384q70.5 0 120.5-50t50-121t-50-121t-120.5-50T93 95T43 216t50 121t120.5 50M288 195q-13 0-22.5-9.5t-9.5-23t9.5-22.5t22.5-9t22.5 9t9.5 22.5t-9.5 23T288 195m-149.5 0q-13.5 0-22.5-9.5t-9-23t9-22.5t22.5-9t23 9t9.5 22.5t-9.5 23t-23 9.5m75 64q36.5 0 66 20.5T322 333H104q13-33 43-53.5t66.5-20.5"></svg:path>`,
})
export class ZmdiMoodBadIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}
