import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerArrowGuideIcon],svg[tabler-arrow-guide-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 19a2 2 0 1 0 4 0a2 2 0 1 0-4 0m4 0h3a2 2 0 0 0 2-2V9a2 2 0 0 1 2-2h7"></svg:path><svg:path d="m18 4l3 3l-3 3"></svg:path></svg:g>`,
})
export class TablerArrowGuideIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
