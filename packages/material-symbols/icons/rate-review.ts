import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsRateReviewIcon],svg[material-symbols-rate-review-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 14h3.075l4.975-5q.225-.225.338-.513t.112-.562t-.112-.537t-.313-.488l-.925-.95q-.225-.225-.5-.337t-.575-.113q-.275 0-.55.113t-.5.337L6 10.925zm6.05-5.1l-.95-.925l.975-.975l.925.95zM11.2 14H18v-2h-4.8zM2 22V4q0-.825.588-1.412T4 2h16q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18H6z"></svg:path>`,
})
export class MaterialSymbolsRateReviewIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
