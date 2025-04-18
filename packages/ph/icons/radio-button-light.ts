import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phRadioButtonLightIcon],svg[ph-radio-button-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m0-144a54 54 0 1 0 54 54a54.06 54.06 0 0 0-54-54m0 96a42 42 0 1 1 42-42a42 42 0 0 1-42 42"></svg:path>`,
})
export class PhRadioButtonLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
