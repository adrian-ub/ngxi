import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsMehBlankIcon],svg[bxs-meh-blank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2M8.5 12a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 8.5 12m6.993-.014a1.494 1.494 0 1 1 .001-2.987a1.494 1.494 0 0 1-.001 2.987"></svg:path>`,
})
export class BxsMehBlankIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
