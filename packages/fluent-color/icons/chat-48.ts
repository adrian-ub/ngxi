import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorChat48Icon],svg[fluent-color-chat-48-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorChat480)" d="M4 24C4 12.954 12.954 4 24 4s20 8.954 20 20s-8.954 20-20 20c-3.45 0-6.698-.874-9.533-2.414L6.23 43.928c-1.319.375-2.537-.844-2.162-2.162l2.342-8.238A19.9 19.9 0 0 1 4 24"></svg:path><svg:path fill="url(#fluentColorChat481)" d="M16 20.25c0 .69.56 1.25 1.25 1.25h13.5a1.25 1.25 0 1 0 0-2.5h-13.5c-.69 0-1.25.56-1.25 1.25m1.25 6.25a1.25 1.25 0 1 0 0 2.5h9.5a1.25 1.25 0 1 0 0-2.5z"></svg:path><svg:defs><svg:lineargradient id="fluentColorChat480" x1="5.429" x2="40.348" y1="11.5" y2="71.037" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0FAFFF"></svg:stop><svg:stop offset="1" stop-color="#CC23D1"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorChat481" x1="17.399" x2="18.454" y1="19.176" y2="30.049" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FDFDFD"></svg:stop><svg:stop offset="1" stop-color="#CCEAFF"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorChat48Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
