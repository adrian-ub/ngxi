import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinFormIcon],svg[vaadin-form-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 2v2H6V2zm1-1H5v4h11zM0 1h4v4H0zm15 6v2H6V7zm1-1H5v4h11zM0 6h4v4H0zm15 6v2H6v-2zm1-1H5v4h11zM0 11h4v4H0z"></svg:path>`,
})
export class VaadinFormIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
