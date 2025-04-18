import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignDam1Icon],svg[tdesign-dam-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3c3.905 0 7 3.162 7 7.1V20h-2v-9.9a5 5 0 0 0-10 0V20H5v-9.9C5 6.162 8.095 3 12 3m9 17v-9.9C21 5.09 17.042 1 12 1s-9 4.09-9 9.1V20H2v2h8v-2H9v-9.9a3 3 0 1 1 6 0V20h-1v2h8v-2z"></svg:path>`,
})
export class TdesignDam1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
