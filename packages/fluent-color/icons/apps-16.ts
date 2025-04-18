import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorApps16Icon],svg[fluent-color-apps-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorApps160)" d="M2 4.5A1.5 1.5 0 0 1 3.5 3h3A1.5 1.5 0 0 1 8 4.5V8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"></svg:path><svg:path fill="url(#fluentColorApps161)" d="M11.5 8A1.5 1.5 0 0 1 13 9.5v3a1.5 1.5 0 0 1-1.5 1.5H8a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"></svg:path><svg:path fill="url(#fluentColorApps162)" d="M8 13a1 1 0 0 1-1 1H3.5A1.5 1.5 0 0 1 2 12.5V9a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1z"></svg:path><svg:path fill="url(#fluentColorApps163)" d="M9.69 2.442a1.5 1.5 0 0 1 2.122 0l1.752 1.752a1.5 1.5 0 0 1 0 2.121l-1.75 1.75a1.5 1.5 0 0 1-2.12 0L7.942 6.311a1.5 1.5 0 0 1 0-2.121z"></svg:path><svg:defs><svg:lineargradient id="fluentColorApps160" x1="2" x2="8" y1="3" y2="9" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#B9C0C7"></svg:stop><svg:stop offset="1" stop-color="#889096"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorApps161" x1="13" x2="7.429" y1="13.571" y2="8" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#63686E"></svg:stop><svg:stop offset="1" stop-color="#889096"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorApps162" x1="2" x2="8" y1="8" y2="11.857" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#55595E"></svg:stop><svg:stop offset="1" stop-color="#383B3D"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorApps163" x1="12.898" x2="9.178" y1="7.06" y2="2.471" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#2764E7"></svg:stop><svg:stop offset="1" stop-color="#36DFF1"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorApps16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
