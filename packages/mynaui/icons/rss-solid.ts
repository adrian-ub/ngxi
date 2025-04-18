import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiRssSolidIcon],svg[mynaui-rss-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M5.25 11.25A.75.75 0 0 1 6 10.5a7.5 7.5 0 0 1 7.5 7.5a.75.75 0 0 1-1.5 0a6 6 0 0 0-6-6a.75.75 0 0 1-.75-.75"></svg:path><svg:path d="M5.25 6A.75.75 0 0 1 6 5.25A12.75 12.75 0 0 1 18.75 18a.75.75 0 0 1-1.5 0A11.25 11.25 0 0 0 6 6.75A.75.75 0 0 1 5.25 6m2.134 10.97a.75.75 0 0 1 0 1.06l-.354.354a.75.75 0 1 1-1.06-1.06l.353-.354a.75.75 0 0 1 1.06 0"></svg:path></svg:g>`,
})
export class MynauiRssSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
