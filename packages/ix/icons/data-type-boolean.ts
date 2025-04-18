import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixDataTypeBooleanIcon],svg[ix-data-type-boolean-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m262.247 313.75l-80.915-80.915l-80.915 80.915l-30.17-30.17l80.915-80.915l-80.915-80.915l30.17-30.17l80.915 80.915l80.915-80.915l30.17 30.17l-80.915 80.915l80.915 80.915zm30.17 128l170.667-170.667l-30.17-30.17l-155.582 155.582l-91.581-91.582l-30.17 30.17L262.247 441.75l15.085 15.085z" clip-rule="evenodd"></svg:path>`,
})
export class IxDataTypeBooleanIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
