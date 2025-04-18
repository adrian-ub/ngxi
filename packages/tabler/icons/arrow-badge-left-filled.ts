import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerArrowBadgeLeftFilledIcon],svg[tabler-arrow-badge-left-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 6h-6a1 1 0 0 0-.78.375l-4 5a1 1 0 0 0 0 1.25l4 5A1 1 0 0 0 11 18h6l.112-.006a1 1 0 0 0 .669-1.619L14.28 12l3.5-4.375A1 1 0 0 0 17 6"></svg:path>`,
})
export class TablerArrowBadgeLeftFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
