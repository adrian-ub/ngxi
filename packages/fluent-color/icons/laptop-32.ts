import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorLaptop32Icon],svg[fluent-color-laptop-32-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorLaptop320)" d="m7.5 22l8.5-.5l8.5.5h.307q.194 0 .372.072l3.893 1.557c.56.224.928.767.928 1.371H2c0-.604.368-1.147.928-1.371l3.893-1.558A1 1 0 0 1 7.193 22z"></svg:path><svg:path fill="url(#fluentColorLaptop321)" d="M3 24a1 1 0 1 0 0 2h26a1 1 0 1 0 0-2z"></svg:path><svg:path fill="url(#fluentColorLaptop322)" d="M4 9.25A3.25 3.25 0 0 1 7.25 6h17.5A3.25 3.25 0 0 1 28 9.25v9.5A3.25 3.25 0 0 1 24.75 22H7.25A3.25 3.25 0 0 1 4 18.75z"></svg:path><svg:defs><svg:lineargradient id="fluentColorLaptop320" x1="29.913" x2="27.617" y1="27.071" y2="16.424" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#63686E"></svg:stop><svg:stop offset="1" stop-color="#889096"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorLaptop321" x1="30" x2="29.736" y1="25.857" y2="22.162" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#889096"></svg:stop><svg:stop offset="1" stop-color="#AAB3BD"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorLaptop322" x1="20.8" x2="21.689" y1="6" y2="24.307" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#6CE0FF"></svg:stop><svg:stop offset="1" stop-color="#4894FE"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorLaptop32Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
