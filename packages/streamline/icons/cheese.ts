import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineCheeseIcon],svg[streamline-cheese-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M9.09.77L9 .75L.75 5.61A.47.47 0 0 0 .5 6v6.71a.5.5 0 0 0 .5.5h12a.5.5 0 0 0 .5-.5v-7A5.88 5.88 0 0 0 9.09.77M.59 5.75H13"></svg:path><svg:path d="m.5 10.38l.08-.07A2 2 0 0 1 2 9.71a2 2 0 0 1 2 2a2 2 0 0 1-.59 1.41M9 10.75a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3"></svg:path></svg:g>`,
})
export class StreamlineCheeseIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
