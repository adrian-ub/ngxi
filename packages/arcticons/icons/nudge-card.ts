import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNudgeCardIcon],svg[arcticons-nudge-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.25 36.002c.413-21.352 19.87-37.775 15.978-7.1c-.66 5.207 2.79 10.971 8.83-4.05c-5.896 16.614 5.157 8.332 7.64.412"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.5 28.048c-3.689 6.525.357 8.237 2.723 4.46c.925-1.476 1.304-2.186 1.833-3.9"></svg:path><svg:circle cx="43" cy="34.233" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsNudgeCardIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
