import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFile1Icon],svg[tdesign-file-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 1h12.414L21 6.586V23H3zm15.586 6L15 3.414V7zM13 3H5v18h14V9h-6zm-6 9h10v2H7zm0 4h10v2H7z"></svg:path>`,
})
export class TdesignFile1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
