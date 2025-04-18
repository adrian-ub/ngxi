import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorPaw32Icon],svg[fluent-color-paw-32-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorPaw321)" d="M16 13a9 9 0 0 0-8.975 9.675c.142 1.914 1.265 3.276 2.703 4.122C11.143 27.63 12.905 28 14.555 28h2.89c1.65 0 3.412-.37 4.827-1.203c1.438-.846 2.56-2.208 2.703-4.122Q25 22.34 25 22a9 9 0 0 0-9-9"></svg:path><svg:path fill="url(#fluentColorPaw320)" d="M8.5 6.75C8.5 4.876 9.777 3 11.75 3S15 4.876 15 6.75s-1.277 3.75-3.25 3.75S8.5 8.624 8.5 6.75m8.5 0C17 4.876 18.277 3 20.25 3s3.25 1.876 3.25 3.75s-1.277 3.75-3.25 3.75S17 8.624 17 6.75m7 4.5c0-1.874 1.277-3.75 3.25-3.75s3.25 1.876 3.25 3.75S29.223 15 27.25 15S24 13.124 24 11.25m-22.5 0c0-1.874 1.277-3.75 3.25-3.75S8 9.376 8 11.25S6.723 15 4.75 15S1.5 13.124 1.5 11.25"></svg:path><svg:defs><svg:radialgradient id="fluentColorPaw320" cx="0" cy="0" r="1" gradientTransform="matrix(0 -15.4286 23.2 0 16.806 15.857)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#EB4824"></svg:stop><svg:stop offset="1" stop-color="#FF921F"></svg:stop></svg:radialgradient><svg:lineargradient id="fluentColorPaw321" x1="11.28" x2="18.251" y1="14.994" y2="28.35" gradientUnits="userSpaceOnUse"><svg:stop offset=".125" stop-color="#FF921F"></svg:stop><svg:stop offset="1" stop-color="#EB4824"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorPaw32Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
