import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerTargetArrowIcon],svg[tabler-target-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0-2 0"></svg:path><svg:path d="M12 7a5 5 0 1 0 5 5"></svg:path><svg:path d="M13 3.055A9 9 0 1 0 20.941 11"></svg:path><svg:path d="M15 6v3h3l3-3h-3V3zm0 3l-3 3"></svg:path></svg:g>`,
})
export class TablerTargetArrowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
