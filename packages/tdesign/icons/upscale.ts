import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignUpscaleIcon],svg[tdesign-upscale-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.056 1.994l6.91.04l.04 6.91l-2 .011l-.02-3.527l-5.027 5.028l-1.415-1.415l5.027-5.027l-3.526-.02zM2 2h10v2H4v6H2zm0 10h4v2H4v2H2zm6 0h4v4h-2v-2H8zm14 0v10h-8v-2h6v-8zM4 18v2h2v2H2v-4zm8 0v4H8v-2h2v-2z"></svg:path>`,
})
export class TdesignUpscaleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
