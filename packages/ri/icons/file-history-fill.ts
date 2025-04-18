import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riFileHistoryFillIcon],svg[ri-file-history-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 2l5 4.999v14.01a.993.993 0 0 1-.993.991H3.993A1 1 0 0 1 3 21.008V2.992C3 2.444 3.445 2 3.993 2zm-3 7h-2v6h5v-2h-3z"></svg:path>`,
})
export class RiFileHistoryFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
