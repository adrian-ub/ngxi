import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phFolderNotchMinusBoldIcon],svg[ph-folder-notch-minus-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 68h-84l-26.67-20a20.12 20.12 0 0 0-12-4H40a20 20 0 0 0-20 20v136a20 20 0 0 0 20 20h176a20 20 0 0 0 20-20V88a20 20 0 0 0-20-20M44 68h48l16 12l-16 12H44Zm168 128H44v-80h49.33a20.12 20.12 0 0 0 12-4L132 92h80Zm-60-56a12 12 0 0 1 0 24h-48a12 12 0 0 1 0-24Z"></svg:path>`,
})
export class PhFolderNotchMinusBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
