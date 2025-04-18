import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiFatCornerLeftDownIcon],svg[mynaui-fat-corner-left-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.923 3q-4.216 3.303-4.785 5.866q-.569 2.564-.172 4.88H20L11.786 21L4 13.747h4.784Q8.82 9.46 12 6.46T19.923 3"></svg:path>`,
})
export class MynauiFatCornerLeftDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
