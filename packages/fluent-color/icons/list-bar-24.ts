import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorListBar24Icon],svg[fluent-color-list-bar-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorListBar240)" d="M8 21h11a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2H8l-.5 2.5zm0-6.5h11a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2H8L7.5 12zM8 8h11a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H8l-.5 2.5z"></svg:path><svg:path fill="url(#fluentColorListBar241)" d="M8 9.5v5H5a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2zM8 3v5H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm0 13v5H5a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2z"></svg:path><svg:defs><svg:lineargradient id="fluentColorListBar240" x1="5.475" x2="20.939" y1=".429" y2="19.98" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#36DFF1"></svg:stop><svg:stop offset="1" stop-color="#0094F0"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorListBar241" x1="4.189" x2="11.747" y1="5.393" y2="8.745" gradientUnits="userSpaceOnUse"><svg:stop offset=".125" stop-color="#9C6CFE"></svg:stop><svg:stop offset="1" stop-color="#7A41DC"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorListBar24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
