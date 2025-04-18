import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riDossierLineIcon],svg[ri-dossier-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2v2h3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3V2zM7 6H5v14h14V6h-2v2H7zm6 5v2h2v2h-2.001L13 17h-2l-.001-2H9v-2h2v-2zm2-7H9v2h6z"></svg:path>`,
})
export class RiDossierLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
