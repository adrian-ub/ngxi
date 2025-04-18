import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bytesizeInboxIcon],svg[bytesize-inbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 15v10h28V15l-4-8H6Zm0 0h8s1 5 6 5s6-5 6-5h8"></svg:path>`,
})
export class BytesizeInboxIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
