import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorAddCircle20Icon],svg[fluent-color-add-circle-20-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorAddCircle200)" d="M18 10a8 8 0 1 1-16 0a8 8 0 0 1 16 0"></svg:path><svg:path fill="url(#fluentColorAddCircle201)" d="M6 10a.5.5 0 0 1 .5-.5h3v-3a.5.5 0 0 1 1 0v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3A.5.5 0 0 1 6 10"></svg:path><svg:defs><svg:lineargradient id="fluentColorAddCircle200" x1="2.571" x2="13.613" y1="5" y2="16.472" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#52D17C"></svg:stop><svg:stop offset="1" stop-color="#22918B"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorAddCircle201" x1="7.5" x2="9.955" y1="6.816" y2="15.481" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#fff"></svg:stop><svg:stop offset="1" stop-color="#E3FFD9"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorAddCircle20Icon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
