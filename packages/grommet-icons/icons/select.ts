import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsSelectIcon],svg[grommet-icons-select-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M8 1h6zm11.188 18.472L16 22l-3.5-4.5l-3 3.5L7 7l13 6.5l-4.5 1.5zM19 4V1h-3M6 1H3v3m0 10v3h3M19 6v4zM3 12V6z"></svg:path>`,
})
export class GrommetIconsSelectIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
