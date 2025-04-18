import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorApps20Icon],svg[fluent-color-apps-20-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorApps200)" d="M3 4.5A1.5 1.5 0 0 1 4.5 3H9a1.5 1.5 0 0 1 1.5 1.5V9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"></svg:path><svg:path fill="url(#fluentColorApps201)" d="M15.5 9.5A1.5 1.5 0 0 1 17 11v4.5a1.5 1.5 0 0 1-1.5 1.5H11a1 1 0 0 1-1-1v-5.5a1 1 0 0 1 1-1z"></svg:path><svg:path fill="url(#fluentColorApps202)" d="M10.5 16a1 1 0 0 1-1 1h-5A1.5 1.5 0 0 1 3 15.5v-5a1 1 0 0 1 1-1h5.5a1 1 0 0 1 1 1z"></svg:path><svg:path fill="url(#fluentColorApps203)" d="M12.938 2.44a1.5 1.5 0 0 1 2.121 0l2.5 2.498a1.5 1.5 0 0 1 0 2.122l-2.5 2.498a1.5 1.5 0 0 1-2.12 0l-2.5-2.498a1.5 1.5 0 0 1 0-2.122z"></svg:path><svg:defs><svg:lineargradient id="fluentColorApps200" x1="3" x2="9.983" y1="3" y2="10.482" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#B9C0C7"></svg:stop><svg:stop offset="1" stop-color="#889096"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorApps201" x1="17" x2="10.052" y1="16.464" y2="9.98" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#63686E"></svg:stop><svg:stop offset="1" stop-color="#889096"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorApps202" x1="3" x2="10.5" y1="9.5" y2="14.321" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#55595E"></svg:stop><svg:stop offset="1" stop-color="#383B3D"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorApps203" x1="16.558" x2="12.12" y1="8.154" y2="2.681" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#2764E7"></svg:stop><svg:stop offset="1" stop-color="#36DFF1"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorApps20Icon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
