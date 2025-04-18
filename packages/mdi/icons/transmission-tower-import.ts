import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTransmissionTowerImportIcon],svg[mdi-transmission-tower-import-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.39 5.45l-1.78-.9L10.87 2h8.47l1.27 2.55l-1.78.89L18.11 4h-6zM21.73 8H17.2l-.79-3h-2.6L13 8H8.5l-1.29 2.55l1.79.89l.73-1.44H20.5l.71 1.45l1.79-.89zm-.85 14h-2.07l-.24-.9l-3.46-5.2l-3.47 5.2l-.23.9H9.34l2.89-11h2.07l-.36 1.35l1.17 1.75l1.16-1.75l-.35-1.35H18zm-6.38-7l-.89-1.35l-1.18 4.48zm3.29 3.12l-1.18-4.48l-.9 1.36zM9 16l-4-4v3H1v2h4v3z"></svg:path>`,
})
export class MdiTransmissionTowerImportIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
