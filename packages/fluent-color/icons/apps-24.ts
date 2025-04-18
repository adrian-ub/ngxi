import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorApps24Icon],svg[fluent-color-apps-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorApps240)" d="M3 5.25A2.25 2.25 0 0 1 5.25 3h5a2.25 2.25 0 0 1 2.25 2.25V11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"></svg:path><svg:path fill="url(#fluentColorApps241)" d="M18.75 11.5A2.25 2.25 0 0 1 21 13.75v5A2.25 2.25 0 0 1 18.75 21H13a1 1 0 0 1-1-1v-7.5a1 1 0 0 1 1-1z"></svg:path><svg:path fill="url(#fluentColorApps242)" d="M12.5 20a1 1 0 0 1-1 1H5.25A2.25 2.25 0 0 1 3 18.75V12.5a1 1 0 0 1 1-1h7.5a1 1 0 0 1 1 1z"></svg:path><svg:path fill="url(#fluentColorApps243)" d="M15.41 2.159a2.25 2.25 0 0 1 3.182 0l3.252 3.251a2.25 2.25 0 0 1 0 3.182l-3.252 3.252a2.25 2.25 0 0 1-3.182 0l-3.25-3.252a2.25 2.25 0 0 1 0-3.182z"></svg:path><svg:defs><svg:lineargradient id="fluentColorApps240" x1="3" x2="11.987" y1="3" y2="12.486" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#B9C0C7"></svg:stop><svg:stop offset="1" stop-color="#889096"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorApps241" x1="21" x2="12.191" y1="20.321" y2="11.976" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#63686E"></svg:stop><svg:stop offset="1" stop-color="#889096"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorApps242" x1="3" x2="12.5" y1="11.5" y2="17.607" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#55595E"></svg:stop><svg:stop offset="1" stop-color="#383B3D"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorApps243" x1="20.565" x2="14.385" y1="10.002" y2="2.38" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#2764E7"></svg:stop><svg:stop offset="1" stop-color="#36DFF1"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorApps24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
