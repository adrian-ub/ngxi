import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6SolidExclamationIcon],svg[fa6-solid-exclamation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64v256c0 17.7 14.3 32 32 32s32-14.3 32-32zM64 480a40 40 0 1 0 0-80a40 40 0 1 0 0 80"></svg:path>`,
})
export class Fa6SolidExclamationIcon {
  readonly viewBox = input("0 0 128 512")
  readonly width = input("0.25em")
  readonly height = input("1em")
}
