import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiMicrowaveOffIcon],svg[mdi-microwave-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.11 21.46L2.39 1.73L1.11 3l2.15 2.15C2.5 5.44 2 6.16 2 7v10a2 2 0 0 0 2 2h13.11l3.73 3.73zM4 17V7h1.11l10 10zM16 7v5.8l5.5 5.51c.31-.36.5-.81.5-1.31V7a2 2 0 0 0-2-2H8.2l2 2zm3 0c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1m0 4c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1m-6-1.2V9h2v2.8z"></svg:path>`,
})
export class MdiMicrowaveOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
