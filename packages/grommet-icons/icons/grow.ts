import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsGrowIcon],svg[grommet-icons-grow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M12 16V7m0 4c0-3 0-6-7-6c0 3 0 6 7 6Zm-8 5h16m-2 0l-2 7H8l-2-7m6-9c0-3 0-6 7-6c0 3 0 6-7 6Z"></svg:path>`,
})
export class GrommetIconsGrowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
