import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icons8PasteIcon],svg[icons8-paste-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 3c-1.26 0-2.152.89-2.594 2H5v23h8v2h14V14h-2V5h-7.406C17.152 3.89 16.26 3 15 3m0 2c.555 0 1 .445 1 1v1h3v2h-8V7h3V6c0-.555.445-1 1-1M7 7h2v4h12V7h2v7H13v12H7zm8 9h10v12H15z"></svg:path>`,
})
export class Icons8PasteIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
