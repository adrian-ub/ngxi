import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCitySwitchIcon],svg[mdi-city-switch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 15V9h-6V3l-3-3l-3 3v2H3v10zm-2-2h-2v-2h2zm-8-8V3h2v2zm0 4V7h2v2zm0 4v-2h2v2zM7 9H5V7h2zm0 4H5v-2h2zm2 4v2h6v-2l3 3l-3 3v-2H9v2l-3-3z"></svg:path>`,
})
export class MdiCitySwitchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
