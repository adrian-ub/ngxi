import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignDownscaleIcon],svg[tdesign-downscale-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h9v2H4v6H2zm19.414 2l-5.027 5.027l3.527.02l-.011 2l-6.91-.04l-.04-6.91l2-.011l.02 3.526L20 2.585zM2 12h4v2H4v2H2zm6 0h4v4h-2v-2H8zm14 1v9h-8v-2h6v-7zM4 18v2h2v2H2v-4zm8 0v4H8v-2h2v-2z"></svg:path>`,
})
export class TdesignDownscaleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
