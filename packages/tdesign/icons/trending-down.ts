import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignTrendingDownIcon],svg[tdesign-trending-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.086 7.5L8.5 13.914l4-4L17.586 15H13.5v2H21V9.5h-2v4.086l-6.5-6.5l-4 4l-5-5z"></svg:path>`,
})
export class TdesignTrendingDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
