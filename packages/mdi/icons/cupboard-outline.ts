import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCupboardOutlineIcon],svg[mdi-cupboard-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 2c-1.1 0-2 .9-2 2v15a2 2 0 0 0 2 2v1h2v-1h6v1h2v-1c1.11 0 2-.89 2-2V4a2 2 0 0 0-2-2zm0 2h10v3H7zm0 5h10v3H7zm0 5h4v5H7zm6 0h4v5h-4zm-5 1v3h2v-3zm6 0v3h2v-3z"></svg:path>`,
})
export class MdiCupboardOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
