import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhInvoiceIcon],svg[whh-invoice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m832.417 960l-64 64l-64-64l-64 64l-64-64l-64 64l-64-64l-64 64l-64-64l-64 64l-64-64l-64 64l-64-64l-64 64V64q0-26 19-45t45-19h768q26 0 45 19t19 45v960zm-672-128h192q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5h-192q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5m608-672q0-13-9.5-22.5t-22.5-9.5h-576q-13 0-22.5 9.5t-9.5 22.5v384q0 13 9.5 22.5t22.5 9.5h352v96q0 13 9.5 22.5t22.5 9.5h192q13 0 22.5-9.5t9.5-22.5zm-192 416h128v64h-128zm0-128h128v64h-128zm0-128h128v64h-128zm0-128h128v64h-128zm-384 256h320v64h-320zm0-128h320v64h-320zm0-128h320v64h-320z"></svg:path>`,
})
export class WhhInvoiceIcon {
  readonly viewBox = input("0 0 897 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
