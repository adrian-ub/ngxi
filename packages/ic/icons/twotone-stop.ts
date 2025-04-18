import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneStopIcon],svg[ic-twotone-stop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 8h8v8H8z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M6 18h12V6H6zM8 8h8v8H8z"></svg:path>`,
})
export class IcTwotoneStopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
