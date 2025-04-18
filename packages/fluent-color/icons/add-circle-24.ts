import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorAddCircle24Icon],svg[fluent-color-add-circle-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorAddCircle240)" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2"></svg:path><svg:path fill="url(#fluentColorAddCircle241)" d="M12 7a.75.75 0 0 0-.743.648l-.007.102v3.5h-3.5a.75.75 0 0 0-.102 1.493l.102.007h3.5v3.5a.75.75 0 0 0 1.493.102l.007-.102v-3.5h3.5a.75.75 0 0 0 .102-1.493l-.102-.007h-3.5v-3.5A.75.75 0 0 0 12 7"></svg:path><svg:defs><svg:lineargradient id="fluentColorAddCircle240" x1="2.714" x2="16.517" y1="5.75" y2="20.09" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#52D17C"></svg:stop><svg:stop offset="1" stop-color="#22918B"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorAddCircle241" x1="8.875" x2="11.943" y1="8.02" y2="18.852" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#fff"></svg:stop><svg:stop offset="1" stop-color="#E3FFD9"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorAddCircle24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
