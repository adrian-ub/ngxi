import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPhIcon],svg[mdi-ph-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 7v10h2v-4h2v4h2V7h-2v4h-2V7zm-2 8v-2a2 2 0 0 0-2-2H5v10h2v-4h2c1.11 0 2-.89 2-2m-2 0H7v-2h2z"></svg:path>`,
})
export class MdiPhIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
