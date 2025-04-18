import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorPin20Icon],svg[fluent-color-pin-20-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorPin200)" fill-rule="evenodd" d="M8.03 11.97a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 0 1-1.06-1.06l3.75-3.75a.75.75 0 0 1 1.06 0" clip-rule="evenodd"></svg:path><svg:path fill="url(#fluentColorPin201)" d="M13.325 2.618a2 2 0 0 0-3.203.52L8.393 6.596a1.5 1.5 0 0 1-.784.722l-3.59 1.436a1 1 0 0 0-.336 1.636l5.927 5.927a1 1 0 0 0 1.636-.335l1.436-3.59a1.5 1.5 0 0 1 .722-.785l3.458-1.73a2 2 0 0 0 .52-3.202z"></svg:path><svg:path fill="url(#fluentColorPin202)" fill-opacity=".8" d="M13.325 2.618a2 2 0 0 0-3.203.52L8.393 6.596a1.5 1.5 0 0 1-.784.722l-3.59 1.436a1 1 0 0 0-.336 1.636l5.927 5.927a1 1 0 0 0 1.636-.335l1.436-3.59a1.5 1.5 0 0 1 .722-.785l3.458-1.73a2 2 0 0 0 .52-3.202z"></svg:path><svg:defs><svg:lineargradient id="fluentColorPin200" x1="4.313" x2="11.096" y1="15.687" y2="10.279" gradientUnits="userSpaceOnUse"><svg:stop offset=".114" stop-color="#7B7BFF"></svg:stop><svg:stop offset=".559" stop-color="#102784"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorPin201" x1="3.91" x2="13.971" y1="4.765" y2="15.218" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#43E5CA"></svg:stop><svg:stop offset="1" stop-color="#1384B1"></svg:stop></svg:lineargradient><svg:radialgradient id="fluentColorPin202" cx="0" cy="0" r="1" gradientTransform="matrix(4.37154 4.78393 -12.00179 10.9672 14.648 13.731)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#E362F8"></svg:stop><svg:stop offset="1" stop-color="#96F" stop-opacity="0"></svg:stop></svg:radialgradient></svg:defs></svg:g>`,
})
export class FluentColorPin20Icon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
