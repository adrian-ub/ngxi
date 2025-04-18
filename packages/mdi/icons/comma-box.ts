import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCommaBoxIcon],svg[mdi-comma-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m10 10V7H9v6h3l-2 4h3z"></svg:path>`,
})
export class MdiCommaBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
