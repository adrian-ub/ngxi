import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiVectorLinkIcon],svg[mdi-vector-link-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 1c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h11c1.11 0 2-.89 2-2v-3h-2v3H3V3h11v2h2V3c0-1.11-.89-2-2-2M9 7c-1.11 0-2 .89-2 2v3h2V9h11v11H9v-2H7v2c0 1.11.89 2 2 2h11c1.11 0 2-.89 2-2V9c0-1.11-.89-2-2-2z"></svg:path>`,
})
export class MdiVectorLinkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
