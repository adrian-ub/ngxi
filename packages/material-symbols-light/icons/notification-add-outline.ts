import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightNotificationAddOutlineIcon],svg[material-symbols-light-notification-add-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.997 21.385q-.668 0-1.14-.475q-.472-.474-.472-1.14h3.23q0 .67-.475 1.143q-.476.472-1.143.472m5.772-7.981v-3h-3v-1h3v-3h1v3h3v1h-3v3zM5 18.769v-1h1.616V9.846q0-1.96 1.24-3.447T11 4.546V4q0-.417.291-.708q.291-.292.707-.292t.709.292T13 4v.546q.466.1.899.251q.434.151.83.403q-.202.177-.397.351q-.195.175-.341.376q-.454-.233-.952-.349q-.498-.117-1.039-.117q-1.823 0-3.104 1.281t-1.28 3.104v7.923h8.769v-2.3q.238.102.478.171t.521.112v2.017H19v1z"></svg:path>`,
})
export class MaterialSymbolsLightNotificationAddOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
