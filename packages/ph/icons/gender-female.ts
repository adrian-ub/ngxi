import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phGenderFemaleIcon],svg[ph-gender-female-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 96a80 80 0 1 0-88 79.6V200H88a8 8 0 0 0 0 16h32v24a8 8 0 0 0 16 0v-24h32a8 8 0 0 0 0-16h-32v-24.4A80.11 80.11 0 0 0 208 96M64 96a64 64 0 1 1 64 64a64.07 64.07 0 0 1-64-64"></svg:path>`,
})
export class PhGenderFemaleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
