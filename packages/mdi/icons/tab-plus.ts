import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTabPlusIcon],svg[mdi-tab-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm0 2h10v4h8v10H3zm7 5v3H7v2h3v3h2v-3h3v-2h-3v-3z"></svg:path>`,
})
export class MdiTabPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
