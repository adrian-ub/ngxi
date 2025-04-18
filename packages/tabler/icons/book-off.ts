import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBookOffIcon],svg[tabler-book-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 5.899-1.096M3 6a9 9 0 0 1 2.114-.884m3.8-.21C9.984 5.076 11.03 5.44 12 6a9 9 0 0 1 9 0M3 6v13m9-13v2m0 4v7m9-13v11M3 3l18 18"></svg:path>`,
})
export class TablerBookOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
