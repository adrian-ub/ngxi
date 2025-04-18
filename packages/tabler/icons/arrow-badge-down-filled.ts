import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerArrowBadgeDownFilledIcon],svg[tabler-arrow-badge-down-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.375 6.22L12 9.718l-4.375-3.5A1 1 0 0 0 6 7v6a1 1 0 0 0 .375.78l5 4a1 1 0 0 0 1.25 0l5-4A1 1 0 0 0 18 13V7a1 1 0 0 0-1.625-.78"></svg:path>`,
})
export class TablerArrowBadgeDownFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
