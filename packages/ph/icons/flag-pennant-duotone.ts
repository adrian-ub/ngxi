import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phFlagPennantDuotoneIcon],svg[ph-flag-pennant-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M240 104L56 168V40Z" opacity=".2"></svg:path><svg:path d="m242.63 96.44l-184-64A8 8 0 0 0 48 40v176a8 8 0 0 0 16 0v-42.31l178.63-62.13a8 8 0 0 0 0-15.12M64 156.75V51.25L215.65 104Z"></svg:path></svg:g>`,
})
export class PhFlagPennantDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
