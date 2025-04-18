import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxBxsShockedIcon],svg[bx-bxs-shocked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2zm-5 8.5a1.5 1.5 0 1 1 3.001.001A1.5 1.5 0 0 1 7 10.5zm5 7.5c-1.657 0-3-1.119-3-2.5s1.343-2.5 3-2.5s3 1.119 3 2.5s-1.343 2.5-3 2.5zm3.493-6.014a1.494 1.494 0 1 1 .001-2.987a1.494 1.494 0 0 1-.001 2.987z" fill="currentColor"></svg:path>`,
})
export class BxBxsShockedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
