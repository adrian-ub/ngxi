import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiNumeric10BoxOutlineIcon],svg[mdi-numeric-10-box-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 19H5V5h14m0-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.11 0 2-.89 2-2V5a2 2 0 0 0-2-2M8 17h2V7H6v2h2m6-2h2a2 2 0 0 1 2 2v6c0 1.11-.89 2-2 2h-2a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2m0 2v6h2V9z"></svg:path>`,
})
export class MdiNumeric10BoxOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
