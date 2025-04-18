import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[websymbolOkCircleIcon],svg[websymbol-ok-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M500 0q136 0 251 67t182 182t67 251t-67 251t-182 182t-251 67t-251-67T67 751T0 500t67-251T249 67T500 0M260 447l-54 53q71 71 129 133.5t81 89.5l22 26q8-13 22-35.5t56.5-85.5T600 509.5T695 390t99-104q-18-35-36-35q-10 6-32 22t-113.5 97.5T402 571z"></svg:path>`,
})
export class WebsymbolOkCircleIcon {
  readonly viewBox = input("0 0 1000 1000")
  readonly width = input("1em")
  readonly height = input("1em")
}
