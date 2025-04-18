import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiMessageFlashOutlineIcon],svg[mdi-message-flash-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 17.2V4h16v6h2V4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v18l4-4h9v-2H5.2zM22.5 16h-2.2l1.7-4h-5v6h2v5z"></svg:path>`,
})
export class MdiMessageFlashOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
