import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiHeadCheckIcon],svg[mdi-head-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 3C9.23 3 6.19 5.95 6 9.66l-1.92 2.53c-.24.31 0 .81.42.81H6v3c0 1.11.89 2 2 2h1v3h7v-4.69c2.37-1.12 4-3.51 4-6.31c0-3.86-3.12-7-7-7m-.53 10L9 9.5l1.4-1.41l2.07 2.08L16.6 6L18 7.41z"></svg:path>`,
})
export class MdiHeadCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
