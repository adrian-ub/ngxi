import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerHandSanitizerIcon],svg[tabler-hand-sanitizer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10V11a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3zm8-18H9a2 2 0 0 0-2 2m5-2v5m0 3v4m-2-2h4"></svg:path>`,
})
export class TablerHandSanitizerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
