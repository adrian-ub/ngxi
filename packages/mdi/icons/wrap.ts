import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiWrapIcon],svg[mdi-wrap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 5H3v2h18zM3 19h7v-2H3zm0-6h15c1 0 2 .43 2 2s-1 2-2 2h-2v-2l-4 3l4 3v-2h2c2.95 0 4-1.27 4-4c0-2.72-1-4-4-4H3z"></svg:path>`,
})
export class MdiWrapIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
