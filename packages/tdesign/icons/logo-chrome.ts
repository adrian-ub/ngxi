import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignLogoChromeIcon],svg[tdesign-logo-chrome-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.001 1c6.075 0 11 4.925 11 11s-4.925 11-11 11s-11-4.924-11-11s4.925-11 11-11m-6.84 5.15L7.384 10l.212-.367A5.01 5.01 0 0 1 12.114 7h7.371a8.99 8.99 0 0 0-7.484-4a8.98 8.98 0 0 0-6.84 3.15M3.93 8.016A9 9 0 0 0 3.001 12c0 4.409 3.17 8.077 7.356 8.85L12.58 17h-.496a5 5 0 0 1-4.492-2.64zm8.662 12.965a9 9 0 0 0 7.898-11.98h-4.444l.24.415a5.01 5.01 0 0 1 0 5.169zm-3.186-7.48A3 3 0 0 0 12 15h.043a3 3 0 0 0 1.459-.403a3 3 0 0 0 1.069-1.047l.029-.05q.078-.136.14-.276c.172-.385.262-.803.263-1.226A3 3 0 0 0 14.6 10.5l-.03-.051a3 3 0 0 0-1.068-1.047c-.45-.26-.941-.39-1.428-.402H12q-.177 0-.35.02a3 3 0 0 0-2.246 1.48l-.054.094A3 3 0 0 0 9 12.001c0 .505.125.981.346 1.399z"></svg:path>`,
})
export class TdesignLogoChromeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
