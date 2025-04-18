import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsEmergencyIcon],svg[grommet-icons-emergency-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10 7.172V2h4v5.172l3.657-3.657l2.828 2.828L16.828 10H22v4h-5.172l3.657 3.657l-2.828 2.828L14 16.828V22h-4v-5.172l-3.657 3.657l-2.828-2.828L7.172 14H2v-4h5.172L3.515 6.343l2.828-2.828z"></svg:path>`,
})
export class GrommetIconsEmergencyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
