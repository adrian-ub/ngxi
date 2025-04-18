import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsChevronDownCircleIcon],svg[bxs-chevron-down-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2m0 14.414l-5.707-5.707l1.414-1.414L12 13.586l4.293-4.293l1.414 1.414z"></svg:path>`,
})
export class BxsChevronDownCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
