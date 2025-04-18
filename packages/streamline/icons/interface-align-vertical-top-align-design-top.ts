import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceAlignVerticalTopAlignDesignTopIcon],svg[streamline-interface-align-vertical-top-align-design-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13.5.5H.5"></svg:path><svg:rect width="6.5" height="4" x="7.25" y="4.25" rx="1" transform="rotate(90 10.5 6.25)"></svg:rect><svg:rect width="10.5" height="4" x="-1.75" y="6.25" rx="1" transform="rotate(90 3.5 8.25)"></svg:rect></svg:g>`,
})
export class StreamlineInterfaceAlignVerticalTopAlignDesignTopIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
