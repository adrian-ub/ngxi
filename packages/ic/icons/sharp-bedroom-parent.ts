import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpBedroomParentIcon],svg[ic-sharp-bedroom-parent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 12h11v2h-11zm.75-3.5h4v2h-4zm5.5 0h4v2h-4z"></svg:path><svg:path fill="currentColor" d="M22 2H2v20h20zm-3 15h-1.5v-1.5h-11V17H5v-5l.65-.55V7H11c.37 0 .72.12 1 .32c.28-.2.63-.32 1-.32h5.35v4.45L19 12z"></svg:path>`,
})
export class IcSharpBedroomParentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
