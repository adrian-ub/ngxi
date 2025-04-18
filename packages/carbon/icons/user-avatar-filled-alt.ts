import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonUserAvatarFilledAltIcon],svg[carbon-user-avatar-filled-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 8a5 5 0 1 0 5 5a5 5 0 0 0-5-5"></svg:path><svg:path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14.016 14.016 0 0 0 16 2m7.993 22.926A5 5 0 0 0 19 20h-6a5 5 0 0 0-4.992 4.926a12 12 0 1 1 15.985 0"></svg:path>`,
})
export class CarbonUserAvatarFilledAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
