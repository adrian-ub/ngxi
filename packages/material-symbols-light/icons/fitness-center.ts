import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFitnessCenterIcon],svg[material-symbols-light-fitness-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.592 21.4l-.9-.9l3.55-3.55L7.05 7.758l-3.55 3.55l-.9-.9l1.439-1.45l-.9-.9l2.1-2.1l-1.4-1.412l.707-.707l1.412 1.4l2.1-2.1l.9.9l1.45-1.439l.9.9l-3.55 3.55l9.192 9.192l3.55-3.55l.9.9l-1.438 1.45l.9.9l-2.1 2.1l1.4 1.412l-.708.708l-1.412-1.4l-2.1 2.1l-.9-.9z"></svg:path>`,
})
export class MaterialSymbolsLightFitnessCenterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
