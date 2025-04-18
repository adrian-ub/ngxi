import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phBatteryPlusBoldIcon],svg[ph-battery-plus-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M152 128a12 12 0 0 1-12 12h-12v12a12 12 0 0 1-24 0v-12H92a12 12 0 0 1 0-24h12v-12a12 12 0 0 1 24 0v12h12a12 12 0 0 1 12 12m72-48v96a28 28 0 0 1-28 28H28a28 28 0 0 1-28-28V80a28 28 0 0 1 28-28h168a28 28 0 0 1 28 28m-24 0a4 4 0 0 0-4-4H28a4 4 0 0 0-4 4v96a4 4 0 0 0 4 4h168a4 4 0 0 0 4-4Zm44 12a12 12 0 0 0-12 12v48a12 12 0 0 0 24 0v-48a12 12 0 0 0-12-12"></svg:path>`,
})
export class PhBatteryPlusBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
