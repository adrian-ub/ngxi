import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpPhonelinkOffIcon],svg[ic-sharp-phonelink-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4.56 4l-2.5-2.49zM24 8h-8v4.61l2 2V10h4v7h-1.61l3 3H24zm-2-2V4H7.39l2 2zM2.06 1.51L.65 2.92L2 4.27V17H0v3h17.73l2.35 2.35l1.41-1.41zM4 17V6.27L14.73 17z"></svg:path>`,
})
export class IcSharpPhonelinkOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
