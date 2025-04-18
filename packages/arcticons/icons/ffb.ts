import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFfbIcon],svg[arcticons-ffb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.112 10.833V4.5h-19.89v13.555h-4.334v4.334h4.334v3.444h-4.334v4.334h4.334V43.5h7.667V30.167h6.777l2-4.334H23.89V22.39h10.333l1.889-4.334H23.889v-7.222z"></svg:path>`,
})
export class ArcticonsFfbIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
