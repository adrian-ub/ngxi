import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeBlockedIcon],svg[icomoon-free-blocked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.657 2.343C12.146.832 10.137 0 8 0S3.854.832 2.343 2.343S0 5.863 0 8s.832 4.146 2.343 5.657S5.863 16 8 16s4.146-.832 5.657-2.343S16 10.137 16 8s-.832-4.146-2.343-5.657M14 8a5.97 5.97 0 0 1-1.111 3.475L4.525 3.111A5.97 5.97 0 0 1 8 2c3.308 0 6 2.692 6 6M2 8a5.97 5.97 0 0 1 1.111-3.475l8.364 8.364A5.97 5.97 0 0 1 8 14c-3.308 0-6-2.692-6-6"></svg:path>`,
})
export class IcomoonFreeBlockedIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
