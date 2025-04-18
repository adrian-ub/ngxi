import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTextAccountIcon],svg[mdi-text-account-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 5v2H3V5zM3 17h9v-2H3zm0-5h18v-2H3zm15 2a2 2 0 1 1 0 4c-1.11 0-2-.89-2-2s.9-2 2-2m-4 8v-1c0-1.1 1.79-2 4-2s4 .9 4 2v1z"></svg:path>`,
})
export class MdiTextAccountIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
