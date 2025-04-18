import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaQBoxOutlineIcon],svg[mdi-alpha-q-box-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2m0 2v14h14V6zm6 1h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2v2h-2v-2a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2m0 2v6h2V9z"></svg:path>`,
})
export class MdiAlphaQBoxOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
