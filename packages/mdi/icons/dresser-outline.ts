import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiDresserOutlineIcon],svg[mdi-dresser-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3c-1.1 0-2 .9-2 2v13a2 2 0 0 0 2 2v1h2v-1h12v1h2v-1c1.11 0 2-.89 2-2V5a2 2 0 0 0-2-2zm0 2h16v3H4zm6 1v1h4V6zm-6 4h16v3H4zm6 1v1h4v-1zm-6 4h16v3H4zm6 1v1h4v-1z"></svg:path>`,
})
export class MdiDresserOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
