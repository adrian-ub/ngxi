import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsArmouryCrateIcon],svg[arcticons-armoury-crate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 7.425L4.5 40.575l9.75-3.9L24 19.125l9.75 17.55l9.75 3.9Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24 26.925l-5.85 9.75l5.85-1.95l5.85 1.95Z"></svg:path>`,
})
export class ArcticonsArmouryCrateIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
