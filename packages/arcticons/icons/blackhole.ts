import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBlackholeIcon],svg[arcticons-blackhole-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24.619" cy="24.745" r="3.268" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.908 29.54a7.973 7.973 0 1 0-10.664-.077m-.335-15.119a10.416 10.416 0 0 0-6.803 15.197"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.068 29.54a12.26 12.26 0 1 0 17.78-14.498"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.07 35.131a18.5 18.5 0 1 1 18.818 7.164"></svg:path>`,
})
export class ArcticonsBlackholeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
