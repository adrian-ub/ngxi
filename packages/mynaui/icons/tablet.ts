import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiTabletIcon],svg[mynaui-tablet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.714 3H6.286C5.023 3 4 3.806 4 4.8v14.4c0 .994 1.023 1.8 2.286 1.8h11.428C18.977 21 20 20.194 20 19.2V4.8c0-.994-1.023-1.8-2.286-1.8M10.5 6h3"></svg:path>`,
})
export class MynauiTabletIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
