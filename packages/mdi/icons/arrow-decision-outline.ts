import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiArrowDecisionOutlineIcon],svg[mdi-arrow-decision-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.64 13.4C8.63 12.5 7.34 12.03 6 12v3l-4-4l4-4v3c1.67 0 3.3.57 4.63 1.59a8 8 0 0 0-.99 1.81M18 15v-3c-.5 0-4.5.16-4.95 4.2c1.56.55 2.38 2.27 1.83 3.83a3.006 3.006 0 0 1-3.83 1.83c-1.55-.56-2.38-2.27-1.83-3.83c.28-.86.98-1.53 1.83-1.83A6.75 6.75 0 0 1 18 10V7l4 4zm-5 4a1 1 0 0 0-1-1a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1m-2-7.88c.58-.66 1.25-1.23 2-1.69V5h3l-4-4l-4 4h3z"></svg:path>`,
})
export class MdiArrowDecisionOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
