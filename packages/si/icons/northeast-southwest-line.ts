import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siNortheastSouthwestLineIcon],svg[si-northeast-southwest-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 6L6 18M18 6v4m0-4h-4M6 18v-4m0 4h4"></svg:path>`,
})
export class SiNortheastSouthwestLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
