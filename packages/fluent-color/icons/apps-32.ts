import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorApps32Icon],svg[fluent-color-apps-32-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorApps320)" d="M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"></svg:path><svg:path fill="url(#fluentColorApps321)" d="M26 15a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H16a1 1 0 0 1-1-1V16a1 1 0 0 1 1-1z"></svg:path><svg:path fill="url(#fluentColorApps322)" d="M17 28a1 1 0 0 1-1 1H6a3 3 0 0 1-3-3V16a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1z"></svg:path><svg:path fill="url(#fluentColorApps323)" d="M20.2 2.953a3.25 3.25 0 0 1 4.597 0l4.248 4.25a3.25 3.25 0 0 1 0 4.595l-4.25 4.248a3.25 3.25 0 0 1-4.596 0l-4.249-4.25a3.25 3.25 0 0 1 0-4.595z"></svg:path><svg:defs><svg:lineargradient id="fluentColorApps320" x1="3" x2="15.964" y1="3" y2="16.962" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#B9C0C7"></svg:stop><svg:stop offset="1" stop-color="#889096"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorApps321" x1="29" x2="16" y1="28" y2="15" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#63686E"></svg:stop><svg:stop offset="1" stop-color="#889096"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorApps322" x1="3" x2="17" y1="15" y2="24" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#55595E"></svg:stop><svg:stop offset="1" stop-color="#383B3D"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorApps323" x1="27.397" x2="18.903" y1="13.625" y2="3.145" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#2764E7"></svg:stop><svg:stop offset="1" stop-color="#36DFF1"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorApps32Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
