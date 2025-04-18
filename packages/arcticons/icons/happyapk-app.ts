import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsHappyapkAppIcon],svg[arcticons-happyapk-app-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 5.5c-2.216 0-4 1.784-4 4v29c0 2.216 1.784 4 4 4h21v-8c0-2.216 1.784-4 4-4h8v-21c0-2.216-1.784-4-4-4z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.5 30.5v3l-9 9h-3"></svg:path><svg:circle cx="15.75" cy="19.355" r="2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="32.25" cy="19.355" r="2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.69 26.231s3.96 4.082 10.31 4.082s10.31-4.082 10.31-4.082"></svg:path>`,
})
export class ArcticonsHappyapkAppIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
