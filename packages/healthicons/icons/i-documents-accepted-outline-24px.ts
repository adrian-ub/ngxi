import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsIDocumentsAcceptedOutline24pxIcon],svg[healthicons-i-documents-accepted-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m16.414 10.979l-1.436-1.393l-2.88 2.97l-1.062-1.118l-1.45 1.377l2.498 2.63z"></svg:path><svg:path fill-rule="evenodd" d="M6 4a2 2 0 0 1 2-2h8.107l2.146 2.342L21 7.638V17a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2zm8.667 0H8v13h11V9h-2.333a2 2 0 0 1-2-2zm2 1.57l.08.088L17.865 7h-1.198z" clip-rule="evenodd"></svg:path><svg:path d="M5 5.5v1H3v-1zM16.5 22h-9c-1.026 0-2.13-.454-2.975-1.201C3.662 20.035 3 18.9 3 17.5v-11h2v11c0 .731.338 1.347.85 1.8c.53.47 1.176.7 1.65.7h9zm0-2h1v2h-1z"></svg:path></svg:g>`,
})
export class HealthiconsIDocumentsAcceptedOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
