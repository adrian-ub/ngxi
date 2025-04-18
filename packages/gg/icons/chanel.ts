import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggChanelIcon],svg[gg-chanel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.072 3.173a9 9 0 0 0-4.608 2.463l2.13 2.13a5.99 5.99 0 0 1 5.701-1.571a9 9 0 0 0 0 11.61a5.99 5.99 0 0 1-5.702-1.57l-2.13 2.129A9 9 0 0 0 12 19.974a9 9 0 0 0 10.536-1.61l-2.13-2.13a5.99 5.99 0 0 1-5.701 1.571A9 9 0 0 0 16.828 12a9 9 0 0 0-2.123-5.805a5.99 5.99 0 0 1 5.702 1.57l2.13-2.129A9 9 0 0 0 12 4.026a9 9 0 0 0-5.928-.853M12 7.705a5.99 5.99 0 0 0-.806 7.622q.354.529.806.968a5.987 5.987 0 0 0 0-8.59" clip-rule="evenodd"></svg:path>`,
})
export class GgChanelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
