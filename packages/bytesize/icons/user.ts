import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bytesizeUserIcon],svg[bytesize-user-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M22 11c0 5-3 9-6 9s-6-4-6-9s2-8 6-8s6 3 6 8M4 30h24c0-9-6-10-12-10S4 21 4 30"></svg:path>`,
})
export class BytesizeUserIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
