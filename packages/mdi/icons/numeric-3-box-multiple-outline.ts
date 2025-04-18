import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiNumeric3BoxMultipleOutlineIcon],svg[mdi-numeric-3-box-multiple-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 13v-1.5a1.5 1.5 0 0 0-1.5-1.5A1.5 1.5 0 0 0 17 8.5V7a2 2 0 0 0-2-2h-4v2h4v2h-2v2h2v2h-4v2h4a2 2 0 0 0 2-2M3 5H1v16a2 2 0 0 0 2 2h16v-2H3m18-4H7V3h14m0-2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiNumeric3BoxMultipleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
