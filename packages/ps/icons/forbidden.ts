import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psForbiddenIcon],svg[ps-forbidden-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 0Q150 0 75 75T0 256t75 181t181 75t181-75t75-181t-75-181T256 0M43 256q0-88 62.5-150.5T256 43q79 0 134 49L92 390q-49-55-49-134m213 213q-79 0-134-49l298-298q49 55 49 134q0 88-62.5 150.5T256 469"></svg:path>`,
})
export class PsForbiddenIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
