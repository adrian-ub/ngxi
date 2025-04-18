import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpLivingIcon],svg[ic-sharp-living-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.5 12v2.5h-7V12h-2v4.5h11V12z"></svg:path><svg:path fill="currentColor" d="M10 10v3h4v-3l2.25-.01V7.5h-8.5v2.49z"></svg:path><svg:path fill="currentColor" d="M22 2H2v20h20zm-3 7.99V18H5v-8l1.25-.01V6h11.5v3.99z"></svg:path>`,
})
export class IcSharpLivingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
