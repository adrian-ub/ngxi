import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSignDirectionPlusIcon],svg[mdi-sign-direction-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 20h.09a5.5 5.5 0 0 0 .72 2H9a2 2 0 0 1 2-2v-8H3.5L6 9.5L3.5 7H11V3l1-1l1 1v4h5l2.5 2.5L18 12h-5m5 3v3h-3v2h3v3h2v-3h3v-2h-3v-3Z"></svg:path>`,
})
export class MdiSignDirectionPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
