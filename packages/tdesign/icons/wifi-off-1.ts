import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignWifiOff1Icon],svg[tdesign-wifi-off-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 1.586L22.414 21l-1.415 1.414l-5.361-5.361l-3.639 4.548L.6 7.351l.779-.626c.747-.6 1.534-1.127 2.35-1.582L1.586 3zm2.207 5.036q-.917.465-1.778 1.064l8.57 10.713l2.216-2.77zm15.362 1.064A15 15 0 0 0 9.41 5.224l-.985.172l-.343-1.97l.985-.173a17 17 0 0 1 13.555 3.472l.779.625l-5.467 6.833l-1.562-1.25z"></svg:path>`,
})
export class TdesignWifiOff1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
