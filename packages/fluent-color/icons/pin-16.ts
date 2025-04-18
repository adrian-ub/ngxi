import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorPin16Icon],svg[fluent-color-pin-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorPin160)" fill-rule="evenodd" d="m6.53 10.53l-3.25 3.25a.75.75 0 1 1-1.06-1.06l3.25-3.25z" clip-rule="evenodd"></svg:path><svg:path fill="url(#fluentColorPin161)" d="M10.059 2.445a1.5 1.5 0 0 0-2.386.353l-2.02 3.79l-2.811.938a.5.5 0 0 0-.196.828l5 5a.5.5 0 0 0 .828-.196l.937-2.811l3.779-2.023a1.5 1.5 0 0 0 .354-2.38z"></svg:path><svg:path fill="url(#fluentColorPin162)" fill-opacity=".8" d="M10.059 2.445a1.5 1.5 0 0 0-2.386.353l-2.02 3.79l-2.811.938a.5.5 0 0 0-.196.828l5 5a.5.5 0 0 0 .828-.196l.937-2.811l3.779-2.023a1.5 1.5 0 0 0 .354-2.38z"></svg:path><svg:defs><svg:lineargradient id="fluentColorPin160" x1="3.133" x2="8.986" y1="12.867" y2="8.201" gradientUnits="userSpaceOnUse"><svg:stop offset=".114" stop-color="#7B7BFF"></svg:stop><svg:stop offset=".559" stop-color="#102784"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorPin161" x1="2.91" x2="10.844" y1="4.159" y2="12.392" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#43E5CA"></svg:stop><svg:stop offset="1" stop-color="#1384B1"></svg:stop></svg:lineargradient><svg:radialgradient id="fluentColorPin162" cx="0" cy="0" r="1" gradientTransform="rotate(47.615 -7.043 18.496)scale(5.10742 12.8119)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#E362F8"></svg:stop><svg:stop offset="1" stop-color="#96F" stop-opacity="0"></svg:stop></svg:radialgradient></svg:defs></svg:g>`,
})
export class FluentColorPin16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
