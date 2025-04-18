import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerArrowBadgeRightFilledIcon],svg[tabler-arrow-badge-right-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7 6l-.112.006a1 1 0 0 0-.669 1.619L9.72 12l-3.5 4.375A1 1 0 0 0 7 18h6a1 1 0 0 0 .78-.375l4-5a1 1 0 0 0 0-1.25l-4-5A1 1 0 0 0 13 6z"></svg:path>`,
})
export class TablerArrowBadgeRightFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
