import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorLaptop48Icon],svg[fluent-color-laptop-48-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorLaptop480)" d="M35.79 32h-.29l-11-.5l-12 .5h-.29a1 1 0 0 0-.402.084l-6.663 2.915A1.91 1.91 0 0 0 4 36.75h40c0-.76-.45-1.447-1.145-1.751l-6.663-2.915A1 1 0 0 0 35.79 32"></svg:path><svg:path fill="url(#fluentColorLaptop481)" d="M5.25 35.5a1.25 1.25 0 1 0 0 2.5h37.5a1.25 1.25 0 1 0 0-2.5z"></svg:path><svg:path fill="url(#fluentColorLaptop482)" d="M8 12.25A4.25 4.25 0 0 1 12.25 8h23.5A4.25 4.25 0 0 1 40 12.25v15.5A4.25 4.25 0 0 1 35.75 32h-23.5A4.25 4.25 0 0 1 8 27.75z"></svg:path><svg:defs><svg:lineargradient id="fluentColorLaptop480" x1="44" x2="41.793" y1="38" y2="25.386" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#63686E"></svg:stop><svg:stop offset="1" stop-color="#889096"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorLaptop481" x1="44" x2="43.711" y1="37.821" y2="33.197" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#889096"></svg:stop><svg:stop offset="1" stop-color="#AAB3BD"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorLaptop482" x1="30.4" x2="31.899" y1="8" y2="35.444" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#6CE0FF"></svg:stop><svg:stop offset="1" stop-color="#4894FE"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorLaptop48Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
