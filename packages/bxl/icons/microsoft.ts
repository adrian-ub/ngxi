import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxlMicrosoftIcon],svg[bxl-microsoft-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.55 21H3v-8.55h8.55zM21 21h-8.55v-8.55H21zm-9.45-9.45H3V3h8.55zm9.45 0h-8.55V3H21z"></svg:path>`,
})
export class BxlMicrosoftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
