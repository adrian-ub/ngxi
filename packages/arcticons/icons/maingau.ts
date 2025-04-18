import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMaingauIcon],svg[arcticons-maingau-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.049 16.962v13.51H38.5m-29 .162h6.426M9.5 17.908h6.426M9.5 24.271h4.177M9.5 17.908v12.726m9.02-1.119c.918 1.015 2.02 1.523 3.673 1.523h2.205c2.02 0 3.673-1.523 3.673-3.384h0c0-1.86-1.653-3.383-3.673-3.383H22.01c-2.02 0-3.674-1.522-3.674-3.383h0c0-1.861 1.653-3.384 3.674-3.384h2.204c1.653 0 2.755.338 3.674 1.523"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 42.5h-29c-2.2 0-4-1.8-4-4v-29c0-2.2 1.8-4 4-4h29c2.2 0 4 1.8 4 4v29c0 2.2-1.8 4-4 4"></svg:path>`,
})
export class ArcticonsMaingauIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
