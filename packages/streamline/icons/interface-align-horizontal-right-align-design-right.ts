import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceAlignHorizontalRightAlignDesignRightIcon],svg[streamline-interface-align-horizontal-right-align-design-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13.5.5v13"></svg:path><svg:rect width="6.5" height="4" x="4.5" y="1.5" rx="1" transform="rotate(180 7.75 3.5)"></svg:rect><svg:rect width="10.5" height="4" x=".5" y="8.5" rx="1" transform="rotate(180 5.75 10.5)"></svg:rect></svg:g>`,
})
export class StreamlineInterfaceAlignHorizontalRightAlignDesignRightIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
