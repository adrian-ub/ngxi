import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinInvoiceIcon],svg[vaadin-invoice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.4 10.2c-.6.1-1.4-.3-1.7-.4l-.5.9s.9.4 1.7.5v.8h1v-.9c.9-.3 1.4-1.1 1.5-1.8c0-.8-.6-1.4-1.9-1.9c-.4-.2-1.1-.5-1.1-.9c0-.5.4-.8 1-.8c.7 0 1.4.3 1.4.3l.4-.9s-.5-.2-1.2-.4V4H4v.7c-.9.2-1.5.8-1.6 1.7c0 1.2 1.3 1.7 1.8 1.9c.6.2 1.3.6 1.3.9c0 .4-.4.9-1.1 1"></svg:path><svg:path fill="currentColor" d="M0 2v12h16V2zm15 11H1V3h14z"></svg:path><svg:path fill="currentColor" d="M8 5h6v1H8zm0 2h6v1H8zm0 2h3v1H8z"></svg:path>`,
})
export class VaadinInvoiceIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
