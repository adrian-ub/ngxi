import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phRadioButtonBoldIcon],svg[ph-radio-button-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84m0-140a56 56 0 1 0 56 56a56.06 56.06 0 0 0-56-56m0 88a32 32 0 1 1 32-32a32 32 0 0 1-32 32"></svg:path>`,
})
export class PhRadioButtonBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
