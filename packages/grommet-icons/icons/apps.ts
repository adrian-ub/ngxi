import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsAppsIcon],svg[grommet-icons-apps-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M19 5h2V3h-2zm-8 0h2V3h-2zM3 5h2V3H3zm16 8h2v-2h-2zm-8 0h2v-2h-2zm-8 0h2v-2H3zm16 8h2v-2h-2zm-8 0h2v-2h-2zm-8 0h2v-2H3z"></svg:path>`,
})
export class GrommetIconsAppsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
