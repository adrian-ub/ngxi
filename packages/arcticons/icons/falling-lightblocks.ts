import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFallingLightblocksIcon],svg[arcticons-falling-lightblocks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11 4.5h13v13H11zm0 13h13v13H11zm0 13h13v13H11zm13 0h13v13H24z"></svg:path>`,
})
export class ArcticonsFallingLightblocksIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
