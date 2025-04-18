import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpStayCurrentPortraitIcon],svg[ic-sharp-stay-current-portrait-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 1.01L5.01 1v22H19zM17 19H7V5h10z"></svg:path>`,
})
export class IcSharpStayCurrentPortraitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
