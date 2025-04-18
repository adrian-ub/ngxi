import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorPaw16Icon],svg[fluent-color-paw-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorPaw161)" d="M8 7a5 5 0 0 0-5 5c0 1.298 1.212 2 2.285 2h5.43C11.788 14 13 13.298 13 12a5 5 0 0 0-5-5"></svg:path><svg:path fill="url(#fluentColorPaw160)" d="M8.5 3.875C8.5 2.938 9.138 2 10.125 2s1.625.938 1.625 1.875s-.638 1.875-1.625 1.875S8.5 4.812 8.5 3.875m-6.125.375C1.388 4.25.75 5.188.75 6.125S1.388 8 2.375 8S4 7.062 4 6.125S3.362 4.25 2.375 4.25m11.25 0c-.987 0-1.625.938-1.625 1.875S12.638 8 13.625 8s1.625-.938 1.625-1.875s-.638-1.875-1.625-1.875M5.875 2c-.987 0-1.625.938-1.625 1.875S4.888 5.75 5.875 5.75S7.5 4.812 7.5 3.875S6.862 2 5.875 2"></svg:path><svg:defs><svg:radialgradient id="fluentColorPaw160" cx="0" cy="0" r="1" gradientTransform="matrix(0 -7.71429 11.6 0 8.403 8.429)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#EB4824"></svg:stop><svg:stop offset="1" stop-color="#FF921F"></svg:stop></svg:radialgradient><svg:lineargradient id="fluentColorPaw161" x1="5.378" x2="8.294" y1="7.931" y2="14.583" gradientUnits="userSpaceOnUse"><svg:stop offset=".125" stop-color="#FF921F"></svg:stop><svg:stop offset="1" stop-color="#EB4824"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorPaw16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
