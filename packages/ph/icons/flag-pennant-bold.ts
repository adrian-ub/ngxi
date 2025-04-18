import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phFlagPennantBoldIcon],svg[ph-flag-pennant-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m243.94 92.67l-184-64A12 12 0 0 0 44 40v176a12 12 0 0 0 24 0v-39.47l175.94-61.2a12 12 0 0 0 0-22.66M68 151.12V56.88L203.47 104Z"></svg:path>`,
})
export class PhFlagPennantBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
