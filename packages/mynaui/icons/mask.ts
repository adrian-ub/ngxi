import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiMaskIcon],svg[mynaui-mask-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m5.7 8.77l5.175-1.517a4 4 0 0 1 2.25 0L18.3 8.769m-12.6 0V7.35a1.35 1.35 0 0 0-2.7 0v2.188a2 2 0 0 0 2 2h.7m0-2.769v2.77m12.6-2.77v2.77m0-2.77V7.35a1.35 1.35 0 1 1 2.7 0v2.188a2 2 0 0 1-2 2h-.7m0 0v.162a6.3 6.3 0 1 1-12.6 0v-.161"></svg:path>`,
})
export class MynauiMaskIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
