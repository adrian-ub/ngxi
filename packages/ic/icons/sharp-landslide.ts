import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpLandslideIcon],svg[ic-sharp-landslide-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.47 13.79l-2.58-1.03L6 15.05l-4-1.54v2.1l4 1.34zm-4.9-2.37L8 8H2v3.61l4 1.34zM6 19.05l-4-1.33V22h20l-4.97-6.62zM17 6V1l-5-1l-3 2v4l3 2zm1.5 1L16 9v3l2.5 2l4.5-2V8z"></svg:path>`,
})
export class IcSharpLandslideIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
