import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerSwordsIcon],svg[tabler-swords-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 3v5l-11 9l-4 4l-3-3l4-4l9-11zM5 13l6 6m3.32-1.68L18 21l3-3l-3.365-3.365M10 5.5L8 3H3v5l3 2.5"></svg:path>`,
})
export class TablerSwordsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
