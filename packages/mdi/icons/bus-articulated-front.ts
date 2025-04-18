import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBusArticulatedFrontIcon],svg[mdi-bus-articulated-front-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1 6l1.5 1.5L1 9l1.5 1.5L1 12l1.5 1.5L1 15h2a3 3 0 0 0 3 3a3 3 0 0 0 3-3h6a3 3 0 0 0 3 3a3 3 0 0 0 3-3h2V8c0-1.11-.89-2-2-2zm3 1.5h2.5V10H4zm4 0h4V10H8zm5.5 0h4V10h-4zm5.5 0h2.5V13L19 11zm-13 6A1.5 1.5 0 0 1 7.5 15A1.5 1.5 0 0 1 6 16.5A1.5 1.5 0 0 1 4.5 15A1.5 1.5 0 0 1 6 13.5m12 0a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5"></svg:path>`,
})
export class MdiBusArticulatedFrontIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
