import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerArrowBadgeUpFilledIcon],svg[tabler-arrow-badge-up-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.375 6.22l-5 4A1 1 0 0 0 6 11v6l.006.112a1 1 0 0 0 1.619.669L12 14.28l4.375 3.5A1 1 0 0 0 18 17v-6a1 1 0 0 0-.375-.78l-5-4a1 1 0 0 0-1.25 0"></svg:path>`,
})
export class TablerArrowBadgeUpFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
