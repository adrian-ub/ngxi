import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phEscalatorDownThinIcon],svg[ph-escalator-down-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M173.17 82.83a4 4 0 0 1 5.66-5.66L196 94.34V48a4 4 0 0 1 8 0v46.34l17.17-17.17a4 4 0 1 1 5.66 5.66l-24 24a4 4 0 0 1-5.66 0ZM236 160v40a12 12 0 0 1-12 12h-56a4 4 0 0 1-2.94-1.29L70.25 108H32a12 12 0 0 1-12-12V56a12 12 0 0 1 12-12h56a4 4 0 0 1 2.94 1.29L185.75 148H224a12 12 0 0 1 12 12m-8 0a4 4 0 0 0-4-4h-40a4 4 0 0 1-2.94-1.29L86.25 52H32a4 4 0 0 0-4 4v40a4 4 0 0 0 4 4h40a4 4 0 0 1 2.94 1.29L169.75 204H224a4 4 0 0 0 4-4Z"></svg:path>`,
})
export class PhEscalatorDownThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
