import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCheckboxBlankOffOutlineIcon],svg[mdi-checkbox-blank-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.11 21.46L2.39 1.73L1.11 3L3 4.9V19a2 2 0 0 0 2 2h14.1l1.74 1.73zM5 19V6.89L17.11 19zM8.2 5l-2-2H19a2 2 0 0 1 2 2v12.8l-2-2V5z"></svg:path>`,
})
export class MdiCheckboxBlankOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
