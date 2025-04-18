import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCupboardIcon],svg[mdi-cupboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2H7c-1.1 0-2 .9-2 2v15a2 2 0 0 0 2 2v1h2v-1h6v1h2v-1c1.11 0 2-.89 2-2V4a2 2 0 0 0-2-2m-7 16H8v-3h2zm6 0h-2v-3h2zm1-6H7V9h10zm0-5H7V4h10z"></svg:path>`,
})
export class MdiCupboardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
