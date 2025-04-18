import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiVectorArrangeAboveIcon],svg[mdi-vector-arrange-above-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 1c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h11c1.11 0 2-.89 2-2V3c0-1.11-.89-2-2-2zm0 2h11v11H3zm15 4v2h2v11H9v-2H7v2c0 1.11.89 2 2 2h11c1.11 0 2-.89 2-2V9c0-1.11-.89-2-2-2z"></svg:path>`,
})
export class MdiVectorArrangeAboveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
