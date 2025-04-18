import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bytesizeHomeIcon],svg[bytesize-home-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 20v10H4V12L16 2l12 10v18h-8V20Z"></svg:path>`,
})
export class BytesizeHomeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
