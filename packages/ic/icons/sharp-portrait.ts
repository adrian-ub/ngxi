import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpPortraitIcon],svg[ic-sharp-portrait-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 12.25c1.24 0 2.25-1.01 2.25-2.25S13.24 7.75 12 7.75S9.75 8.76 9.75 10s1.01 2.25 2.25 2.25m4.5 4c0-1.5-3-2.25-4.5-2.25s-4.5.75-4.5 2.25V17h9zM21 3H3v18h18zm-2 16H5V5h14z"></svg:path>`,
})
export class IcSharpPortraitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
