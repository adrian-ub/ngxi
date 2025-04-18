import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixStopFilledIcon],svg[ix-stop-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M128 128h256v256H128z"></svg:path>`,
})
export class IxStopFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
