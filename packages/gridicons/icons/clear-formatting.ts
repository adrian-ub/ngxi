import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gridiconsClearFormattingIcon],svg[gridicons-clear-formatting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.837 10.163l-4.6 4.6L10 4h4l.777 2.223l-2.144 2.144l-.627-2.092zm5.495.506L19.244 19H15.82l-1.049-3.5H11.5L5 22l-1.5-1.5l17-17L22 5zm-2.311 2.31l-.031.031l.032-.01z"></svg:path>`,
})
export class GridiconsClearFormattingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
