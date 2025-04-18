import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[wiMoonWaxingCrescent6Icon],svg[wi-moon-waxing-crescent-6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M0 1537q209 0 386-103t280-280t103-386t-103-385.5T386 103T0 0q171 297 171 768q0 239-35.5 430T0 1537z" fill="currentColor"></svg:path>`,
})
export class WiMoonWaxingCrescent6Icon {
  readonly viewBox = input("0 0 769 1537")
  readonly width = input("0.51em")
  readonly height = input("1em")
}
