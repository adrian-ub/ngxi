import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPlusOutlineIcon],svg[mdi-plus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 9h5V4h6v5h5v6h-5v5H9v-5H4zm7 4v5h2v-5h5v-2h-5V6h-2v5H6v2z"></svg:path>`,
})
export class MdiPlusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
