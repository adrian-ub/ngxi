import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceAlignHorizontalLeftAlignDesignLeftIcon],svg[streamline-interface-align-horizontal-left-align-design-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.5.5v13"></svg:path><svg:rect width="6.5" height="4" x="3" y="1.5" rx="1"></svg:rect><svg:rect width="10.5" height="4" x="3" y="8.5" rx="1"></svg:rect></svg:g>`,
})
export class StreamlineInterfaceAlignHorizontalLeftAlignDesignLeftIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
