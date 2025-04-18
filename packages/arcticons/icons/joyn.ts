import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsJoynIcon],svg[arcticons-joyn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:circle cx="18.257" cy="21.386" r="3.637" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 17.75h2.967v9.762A2.764 2.764 0 0 1 9.5 30.287M24.334 17.75v5.152c0 1.451 2.107 3.94 5.456 1.116"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.79 17.75v9.857c0 3.637-5.456 3.063-5.456.479m8.328-10.337v7.557m0-4.686c1.531-2.87 5.838-4.306 5.838-1.052v5.738"></svg:path>`,
})
export class ArcticonsJoynIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
