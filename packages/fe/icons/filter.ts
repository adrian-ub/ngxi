import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[feFilterIcon],svg[fe-filter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 5.97V4H6v1.97l6 4.286zM13 12v8l-2 2V12L4.838 7.598A2 2 0 0 1 4 5.971V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1.97a2 2 0 0 1-.838 1.628z"></svg:path>`,
})
export class FeFilterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
