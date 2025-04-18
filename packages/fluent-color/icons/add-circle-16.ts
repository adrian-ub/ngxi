import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorAddCircle16Icon],svg[fluent-color-add-circle-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorAddCircle160)" d="M2 8a6 6 0 1 1 12 0A6 6 0 0 1 2 8"></svg:path><svg:path fill="url(#fluentColorAddCircle161)" d="M8 5a.5.5 0 0 0-.5.5v2h-2a.5.5 0 0 0 0 1h2v2a.5.5 0 0 0 1 0v-2h2a.5.5 0 0 0 0-1h-2v-2A.5.5 0 0 0 8 5"></svg:path><svg:defs><svg:lineargradient id="fluentColorAddCircle160" x1="2.429" x2="10.71" y1="4.25" y2="12.854" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#52D17C"></svg:stop><svg:stop offset="1" stop-color="#22918B"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorAddCircle161" x1="6.125" x2="7.966" y1="5.612" y2="12.111" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#fff"></svg:stop><svg:stop offset="1" stop-color="#E3FFD9"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorAddCircle16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
