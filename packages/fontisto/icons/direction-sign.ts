import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoDirectionSignIcon],svg[fontisto-direction-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.497 17.679h4.437V24H9.497zM1.906 4.054L-.001 5.961l1.907 1.906h12.026V4.053zm0 9.331l-1.907 1.906l1.907 1.9h12.026v-3.806zm19.616-4.662H9.736v3.814h11.786l1.907-1.907zM11.71 0L9.496 2.545v1.028h4.437V2.545z"></svg:path>`,
})
export class FontistoDirectionSignIcon {
  readonly viewBox = input("0 0 23 24")
  readonly width = input("0.96em")
  readonly height = input("1em")
}
