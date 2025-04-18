import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceAlignVerticalCenterAlignDesignMiddleIcon],svg[streamline-interface-align-vertical-center-align-design-middle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="8" height="4" x="7.5" y="5.5" rx="1" transform="rotate(90 11.5 7.5)"></svg:rect><svg:rect width="11" height="4" x="-3" y="5" rx="1" transform="rotate(90 2.5 7)"></svg:rect><svg:path d="M9.5 7h-5"></svg:path></svg:g>`,
})
export class StreamlineInterfaceAlignVerticalCenterAlignDesignMiddleIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
