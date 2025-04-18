import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsAlignTextCenterSolidIcon],svg[teenyicons-align-text-center-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 3h15v1H0zm5 4h5v1H5zm-2 4h9v1H3z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsAlignTextCenterSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
