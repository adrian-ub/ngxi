import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorEdit16Icon],svg[fluent-color-edit-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorEdit160)" d="M2.657 9.635L9.75 2.542l3.707 3.708l-7.093 7.092l-2.267-1.439z"></svg:path><svg:path fill="url(#fluentColorEdit161)" d="m2.964 9.328l-.307.307a2.95 2.95 0 0 0-.772 1.355l-.87 3.385a.5.5 0 0 0 .61.609l3.385-.87c.512-.13.98-.398 1.354-.772l.307-.307s-1.285-.3-2.345-1.361s-1.362-2.346-1.362-2.346"></svg:path><svg:path fill="url(#fluentColorEdit162)" d="M10.529 1.764a2.621 2.621 0 1 1 3.707 3.707l-1.908 1.908l-3.707-3.707z"></svg:path><svg:path fill="url(#fluentColorEdit163)" d="M8.266 4.026s.295 1.291 1.356 2.352a5.4 5.4 0 0 0 2.351 1.356L13.4 6.308s-1.29-.298-2.35-1.358A5.4 5.4 0 0 1 9.692 2.6z"></svg:path><svg:defs><svg:lineargradient id="fluentColorEdit160" x1="8.631" x2="10.281" y1="5.563" y2="10.095" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FFA43D"></svg:stop><svg:stop offset="1" stop-color="#FB5937"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorEdit161" x1=".187" x2="4.275" y1="10.908" y2="14.972" gradientUnits="userSpaceOnUse"><svg:stop offset=".255" stop-color="#FFD394"></svg:stop><svg:stop offset="1" stop-color="#FF921F"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorEdit162" x1="13.669" x2="11.316" y1="2.324" y2="4.537" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#F97DBD"></svg:stop><svg:stop offset="1" stop-color="#DD3CE2"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorEdit163" x1="10.921" x2="7.295" y1="6.114" y2="4.528" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FF921F"></svg:stop><svg:stop offset="1" stop-color="#FFE994"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorEdit16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
