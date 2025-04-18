import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[entypoBoxIcon],svg[entypo-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.399 2H1.6c-.332 0-.6.267-.6.6V5h18V2.6a.6.6 0 0 0-.601-.6M2 16.6c0 .77.629 1.4 1.399 1.4h13.2c.77 0 1.4-.631 1.4-1.4V6H2zM7 8h6v2H7z"></svg:path>`,
})
export class EntypoBoxIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
