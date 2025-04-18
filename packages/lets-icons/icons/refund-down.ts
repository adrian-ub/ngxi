import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsRefundDownIcon],svg[lets-icons-refund-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 20l-.707.707l.707.707l.707-.707zM4 15a1 1 0 1 0 2 0zm6.293.707l5 5l1.414-1.414l-5-5zm6.414 5l5-5l-1.414-1.414l-5 5zM17 20V9.5h-2V20zM4 9.5V15h2V9.5zM10.5 3A6.5 6.5 0 0 0 4 9.5h2A4.5 4.5 0 0 1 10.5 5zM17 9.5A6.5 6.5 0 0 0 10.5 3v2A4.5 4.5 0 0 1 15 9.5z"></svg:path>`,
})
export class LetsIconsRefundDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
