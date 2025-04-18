import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignTrendingUpIcon],svg[tdesign-trending-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.086 16.5L8.5 10.086l4 4L17.586 9H13.5V7H21v7.5h-2v-4.086l-6.5 6.5l-4-4l-5 5z"></svg:path>`,
})
export class TdesignTrendingUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
