import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phProhibitLightIcon],svg[ph-prohibit-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m90 102a89.6 89.6 0 0 1-22.29 59.22L68.78 60.29A89.95 89.95 0 0 1 218 128m-180 0a89.6 89.6 0 0 1 22.29-59.22l126.93 126.93A89.95 89.95 0 0 1 38 128"></svg:path>`,
})
export class PhProhibitLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
