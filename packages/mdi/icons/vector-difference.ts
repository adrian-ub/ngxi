import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiVectorDifferenceIcon],svg[mdi-vector-difference-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 1c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h2v-2H3V3h11v2h2V3c0-1.11-.89-2-2-2zm6 6c-1.11 0-2 .89-2 2v2h2V9h2V7zm4 0v2h1v1h2V7zm5 0v2h2v11H9v-2H7v2c0 1.11.89 2 2 2h11c1.11 0 2-.89 2-2V9c0-1.11-.89-2-2-2zm-4 5v2h-2v2h2c1.11 0 2-.89 2-2v-2zm-7 1v3h3v-2H9v-1z"></svg:path>`,
})
export class MdiVectorDifferenceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
