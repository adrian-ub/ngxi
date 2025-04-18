import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandCodecovIcon],svg[tabler-brand-codecov-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.695 12.985A5.97 5.97 0 0 0 6.4 12c-1.257 0-2.436.339-3.4 1a9 9 0 1 1 18 0c-.966-.664-2.14-1-3.4-1a6 6 0 0 0-5.605 8.144"></svg:path>`,
})
export class TablerBrandCodecovIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
