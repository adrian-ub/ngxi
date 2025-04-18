import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerNumber37SmallIcon],svg[tabler-number-37-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 8h4l-2 8M6 8h2.5A1.5 1.5 0 0 1 10 9.5v1A1.5 1.5 0 0 1 8.5 12H7h1.5a1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 8.5 16H6"></svg:path>`,
})
export class TablerNumber37SmallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
