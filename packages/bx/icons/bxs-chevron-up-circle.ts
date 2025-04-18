import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxBxsChevronUpCircleIcon],svg[bx-bxs-chevron-up-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2zm4.293 12.707L12 10.414l-4.293 4.293l-1.414-1.414L12 7.586l5.707 5.707l-1.414 1.414z" fill="currentColor"></svg:path>`,
})
export class BxBxsChevronUpCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
