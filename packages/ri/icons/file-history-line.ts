import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riFileHistoryLineIcon],svg[ri-file-history-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 2l5 5v13.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008V2.992C3 2.444 3.447 2 3.999 2zm-1 2H5v16h14V8h-4zm-2 5v4h3v2h-5V9z"></svg:path>`,
})
export class RiFileHistoryLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
