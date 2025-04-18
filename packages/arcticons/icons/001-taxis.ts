import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticons001TaxisIcon],svg[arcticons-001-taxis-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m33.434 19.954l3.046-1.513l-1.96 11.118m-2 0h4m-11.27.001c-2.033 0-3.391-1.65-3.033-3.684l.662-3.752c.359-2.034 2.298-3.683 4.332-3.683h0c2.035 0 3.393 1.649 3.034 3.683l-.662 3.752c-.358 2.034-2.298 3.683-4.332 3.683m-10.68.001c-2.034 0-3.392-1.65-3.033-3.684l.661-3.752c.36-2.034 2.299-3.683 4.333-3.683h0c2.034 0 3.392 1.649 3.034 3.683l-.662 3.752c-.359 2.034-2.298 3.683-4.333 3.683"></svg:path><svg:ellipse cx="24" cy="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="21.5" ry="12"></svg:ellipse>`,
})
export class Arcticons001TaxisIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
