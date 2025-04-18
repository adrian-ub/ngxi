import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhPastealtIcon],svg[whh-pastealt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.94 1024h-448q-27 0-45.5-18.5t-18.5-45.5V384q0-26 18.5-45t45.5-19h256v256h256v384q0 27-18.5 45.5t-45.5 18.5m-128-703q20 3 32 15l143 147q11 11 14 29h-189zm-128-193h-64V64h64q27 0 45.5 19t18.5 45v128h-64zm-192 64h-256q-27 0-45.5-18.5t-18.5-45t18.5-45.5t45.5-19q0-26 18.5-45t45.5-19h128q27 0 45.5 19t18.5 45q27 0 45.5 19t18.5 45.5t-18.5 45t-45.5 18.5m-448 704h320v64h-320q-26 0-45-18.5T.94 896V128q0-26 18.5-45t45.5-19h64v64h-64z"></svg:path>`,
})
export class WhhPastealtIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
