import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riMicrosoftFillIcon],svg[ri-microsoft-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.501 3v8.5h-8.5V3zm0 18h-8.5v-8.5h8.5zm1-18h8.5v8.5h-8.5zm8.5 9.5V21h-8.5v-8.5z"></svg:path>`,
})
export class RiMicrosoftFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
