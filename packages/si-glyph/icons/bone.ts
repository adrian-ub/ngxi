import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphBoneIcon],svg[si-glyph-bone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.321 13.61s.062 1.264.649 1.852c.684.683 1.781.694 2.452.024c.954-.954 1.084-2.273.97-3.367l5.766-5.765c1.087.109 2.404-.027 3.375-.998c.662-.662.647-1.752-.034-2.434c-.589-.588-1.786-.577-1.786-.577s-.038-1.246-.631-1.839c-.686-.688-1.789-.703-2.457-.033c-.97.97-1.085 2.322-.958 3.429L4.939 9.631c-1.091-.109-2.416.026-3.395 1.004c-.664.663-.651 1.75.025 2.427c.587.584 1.752.548 1.752.548"></svg:path>`,
})
export class SiGlyphBoneIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
