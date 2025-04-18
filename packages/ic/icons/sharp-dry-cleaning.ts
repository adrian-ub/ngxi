import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpDryCleaningIcon],svg[ic-sharp-dry-cleaning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21 12l-8-3.56V6h-1c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1h2c0-1.84-1.66-3.3-3.56-2.95c-1.18.22-2.15 1.17-2.38 2.35c-.3 1.56.6 2.94 1.94 3.42v.63l-8 3.56V16h4v6h10v-6h4zm-2 2h-2v-1H7v1H5v-.7l7-3.11l7 3.11z"></svg:path>`,
})
export class IcSharpDryCleaningIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
