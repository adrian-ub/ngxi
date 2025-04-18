import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[primeMicrosoftIcon],svg[prime-microsoft-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4h7.5v7.5H4Zm8.5 0H20v7.5h-7.5ZM4 12.5h7.5V20H4Zm8.5 0H20V20h-7.5Z"></svg:path>`,
})
export class PrimeMicrosoftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
