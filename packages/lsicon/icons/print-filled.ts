import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconPrintFilledIcon],svg[lsicon-print-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 3h8V2H4zm10 1H2v7h2v3h8v-3h2zm-3 9H5V9h6zM4 7h3V6H4z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconPrintFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
