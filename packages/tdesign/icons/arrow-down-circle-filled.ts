import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignArrowDownCircleFilledIcon],svg[tdesign-arrow-down-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 12c0-6.075-4.925-11-11-11S1 5.925 1 12s4.925 11 11 11s11-4.925 11-11m-7 0l-4 6.25L8 12h3V6h2v6z"></svg:path>`,
})
export class TdesignArrowDownCircleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
