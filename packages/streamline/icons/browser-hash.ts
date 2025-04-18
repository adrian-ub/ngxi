import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineBrowserHashIcon],svg[streamline-browser-hash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 3.494h13M6.546 5.689l-1.817 5.302M9.27 5.689l-1.816 5.302m2.726-3.937H4.274m5.451 2.725H3.821M12.5.5h-11a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1"></svg:path>`,
})
export class StreamlineBrowserHashIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
