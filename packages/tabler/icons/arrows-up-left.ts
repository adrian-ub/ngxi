import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerArrowsUpLeftIcon],svg[tabler-arrows-up-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m21 7l-4-4l-4 4"></svg:path><svg:path d="M17 3v11a3 3 0 0 1-3 3H3"></svg:path><svg:path d="m7 13l-4 4l4 4"></svg:path></svg:g>`,
})
export class TablerArrowsUpLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
