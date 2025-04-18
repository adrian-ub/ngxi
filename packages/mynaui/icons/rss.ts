import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiRssIcon],svg[mynaui-rss-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 11.25A6.75 6.75 0 0 1 12.75 18M6 6a12 12 0 0 1 12 12m-11.5-.146l.354-.354"></svg:path>`,
})
export class MynauiRssIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
