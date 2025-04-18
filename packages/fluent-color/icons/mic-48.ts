import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorMic48Icon],svg[fluent-color-mic-48-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorMic480)" d="M25 37.715c7.265-.513 13-6.57 13-13.965a1.25 1.25 0 1 0-2.5 0c0 6.351-5.149 11.5-11.5 11.5s-11.5-5.149-11.5-11.5a1.25 1.25 0 1 0-2.5 0c0 7.225 5.473 13.172 12.5 13.92v5.08a1.25 1.25 0 1 0 2.5 0z"></svg:path><svg:path fill="url(#fluentColorMic481)" d="M16 12a8 8 0 1 1 16 0v12a8 8 0 1 1-16 0z"></svg:path><svg:defs><svg:lineargradient id="fluentColorMic480" x1="10" x2="23.45" y1="13.269" y2="46.06" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#CAD2D9"></svg:stop><svg:stop offset="1" stop-color="#70777D"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorMic481" x1="12" x2="26.691" y1="-2.364" y2="47.657" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0FAFFF"></svg:stop><svg:stop offset="1" stop-color="#CC23D1"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorMic48Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
