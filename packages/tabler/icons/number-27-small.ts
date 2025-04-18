import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerNumber27SmallIcon],svg[tabler-number-27-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 8h4l-2 8M6 8h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h3"></svg:path>`,
})
export class TablerNumber27SmallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
