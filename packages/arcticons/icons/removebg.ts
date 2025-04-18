import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRemovebgIcon],svg[arcticons-removebg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m23.976 10.89l19.23 9.637l-19.23 9.698l-19.257-9.698z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.2 23.287L4.94 26.13c-.361.31-.779.916 0 1.282l19.035 9.7l18.95-9.421c.571-.28.836-1.2.224-1.617l-5.342-2.824"></svg:path>`,
})
export class ArcticonsRemovebgIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
