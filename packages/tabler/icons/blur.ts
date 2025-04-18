import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBlurIcon],svg[tabler-blur-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21a9 9 0 0 0 2.32-.302a9 9 0 0 0 1.74-16.733A9 9 0 1 0 12 21m0-18v17m0-8h9m-9-3h8m-8-3h6m-6 12h6m-6-3h8"></svg:path>`,
})
export class TablerBlurIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
