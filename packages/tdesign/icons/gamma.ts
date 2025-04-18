import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignGammaIcon],svg[tdesign-gamma-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.262 1.457l6.569 12.747L18.5 1.677l1.822.824l-6.434 14.215V22h-2v-5.257L6.182 5.668L4.38 8.862L2.638 7.88z"></svg:path>`,
})
export class TdesignGammaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
