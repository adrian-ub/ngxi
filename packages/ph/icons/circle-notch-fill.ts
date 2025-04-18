import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCircleNotchFillIcon],svg[ph-circle-notch-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 176A72 72 0 0 1 92 65.64a8 8 0 0 1 8 13.85a56 56 0 1 0 56 0a8 8 0 0 1 8-13.85A72 72 0 0 1 128 200"></svg:path>`,
})
export class PhCircleNotchFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
