import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignSharpnessIcon],svg[tdesign-sharpness-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.5.586V19.5H1.587zM6.416 17.5H18.5V5.414zM20.5 21v2h-19v-2z"></svg:path>`,
})
export class TdesignSharpnessIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
