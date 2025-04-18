import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpStayPrimaryPortraitIcon],svg[ic-sharp-stay-primary-portrait-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.01 1v22H19V1zM17 19H7V5h10z"></svg:path>`,
})
export class IcSharpStayPrimaryPortraitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
