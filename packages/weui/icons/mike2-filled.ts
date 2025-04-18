import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[weuiMike2FilledIcon],svg[weui-mike2-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.6 16.46a4.5 4.5 0 0 0 3.9-4.462V10.5h-1.2v1.498a3.3 3.3 0 1 1-6.6 0V10.5H7.5v1.498a4.5 4.5 0 0 0 3.9 4.462V18h1.2zM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m0-15.5a2 2 0 0 0-2 2V12a2 2 0 1 0 4 0V8.5a2 2 0 0 0-2-2"></svg:path>`,
})
export class WeuiMike2FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
