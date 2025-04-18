import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpBuildIcon],svg[ic-sharp-build-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.09 2.91C10.08.9 7.07.49 4.65 1.67l4.34 4.34l-3 3l-4.34-4.34C.48 7.1.89 10.09 2.9 12.1a6.51 6.51 0 0 0 6.89 1.48l9.82 9.82l3.71-3.71l-9.78-9.79c.92-2.34.44-5.1-1.45-6.99"></svg:path>`,
})
export class IcSharpBuildIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
