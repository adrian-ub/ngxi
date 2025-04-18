import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpCenterFocusStrongIcon],svg[ic-sharp-center-focus-strong-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4m-7 7H3v6h6v-2H5zM5 5h4V3H3v6h2zm16-2h-6v2h4v4h2zm-2 16h-4v2h6v-6h-2z"></svg:path>`,
})
export class IcSharpCenterFocusStrongIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
