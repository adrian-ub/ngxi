import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiNumeric9PlusBoxIcon],svg[mdi-numeric-9-plus-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 5v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2m-2 6h-2V9h-2v2h-2v2h2v2h2v-2h2zm-9-4H8a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2v2H6v2h4a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2M8 9h2v2H8z"></svg:path>`,
})
export class MdiNumeric9PlusBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
