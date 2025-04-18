import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsWebtubeIcon],svg[arcticons-webtube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.916 9.733C-9.22 38.03 38.32 55.347 45.493 24.543"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.907 2.5c-31.58 17 6.357 52.346 21.586 22.043"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.478 33.05c.025.016 8.145-4.148 11.479-5.901c1.214-.638 1.15-1.684-.05-2.29a3784 3784 0 0 0-11.499-5.762a1.277 1.277 0 0 0-1.699 1.354c-.01 1.216 0 10.895 0 10.895"></svg:path>`,
})
export class ArcticonsWebtubeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
