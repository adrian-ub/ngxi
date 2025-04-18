import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bytesizeClipboardIcon],svg[bytesize-clipboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2v4h8V2zm-1 2H6v26h20V4h-5"></svg:path>`,
})
export class BytesizeClipboardIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
