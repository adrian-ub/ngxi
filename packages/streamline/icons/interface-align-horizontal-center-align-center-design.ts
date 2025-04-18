import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceAlignHorizontalCenterAlignCenterDesignIcon],svg[streamline-interface-align-horizontal-center-align-center-design-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="7" height="4" x="3.5" y=".5" rx="1"></svg:rect><svg:rect width="11" height="4" x="1.5" y="9.5" rx="1"></svg:rect><svg:path d="M7 4.5v5"></svg:path></svg:g>`,
})
export class StreamlineInterfaceAlignHorizontalCenterAlignCenterDesignIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
