import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamMessageAltWritingFIcon],svg[jam-message-alt-writing-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.01 15.959q-.279.027-4.321 3.774a1 1 0 0 1-1.68-.742q.03-3.543-.024-4.04c-.018-.173.032-.28 0-.3C1.708 13.212 0 10.775 0 8.005C0 3.584 4.03 0 9 0s9 3.584 9 8.004c0 4.117-3.495 7.509-7.99 7.955M12 10a2 2 0 1 0 0-4a2 2 0 0 0 0 4m-6 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class JamMessageAltWritingFIcon {
  readonly viewBox = input("-3 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
