import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorApps48Icon],svg[fluent-color-apps-48-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorApps480)" d="M6 10a4 4 0 0 1 4-4h11a4 4 0 0 1 4 4v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1z"></svg:path><svg:path fill="url(#fluentColorApps481)" d="M38 23a4 4 0 0 1 4 4v11a4 4 0 0 1-4 4H24a1 1 0 0 1-1-1V24a1 1 0 0 1 1-1z"></svg:path><svg:path fill="url(#fluentColorApps482)" d="M25 41a1 1 0 0 1-1 1H10a4 4 0 0 1-4-4V24a1 1 0 0 1 1-1h17a1 1 0 0 1 1 1z"></svg:path><svg:path fill="url(#fluentColorApps483)" d="M30.254 5.245a4.25 4.25 0 0 1 6.01.02l6.463 6.508a4.25 4.25 0 0 1-.02 6.01l-6.496 6.45a4.25 4.25 0 0 1-6.01-.02l-6.463-6.508a4.25 4.25 0 0 1 .021-6.01z"></svg:path><svg:defs><svg:lineargradient id="fluentColorApps480" x1="6" x2="23.974" y1="6.184" y2="25.156" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#B9C0C7"></svg:stop><svg:stop offset="1" stop-color="#889096"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorApps481" x1="42" x2="24.357" y1="40.643" y2="23" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#63686E"></svg:stop><svg:stop offset="1" stop-color="#889096"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorApps482" x1="6" x2="25" y1="23" y2="35.214" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#55595E"></svg:stop><svg:stop offset="1" stop-color="#383B3D"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorApps483" x1="40.133" x2="28.183" y1="20.592" y2="5.746" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#2764E7"></svg:stop><svg:stop offset="1" stop-color="#36DFF1"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorApps48Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
