import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circumHashtagIcon],svg[circum-hashtag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.435 15.506H16.2l.61-7h3.63a.5.5 0 0 0 .5-.5a.5.5 0 0 0-.5-.5H16.9l.34-3.87a.51.51 0 0 0-.46-.54a.5.5 0 0 0-.54.46l-.35 3.95H8.9l.34-3.87a.51.51 0 0 0-.46-.54a.49.49 0 0 0-.54.46l-.35 3.95H3.565a.5.5 0 0 0-.5.5a.5.5 0 0 0 .5.5h4.24l-.62 7h-3.62a.5.5 0 0 0-.5.5a.5.5 0 0 0 .5.5h3.54l-.34 3.86a.51.51 0 0 0 .45.54h.05a.516.516 0 0 0 .5-.46l.34-3.94h7l-.34 3.86a.51.51 0 0 0 .45.54h.05a.516.516 0 0 0 .5-.46l.34-3.94h4.33a.5.5 0 0 0 .5-.5a.5.5 0 0 0-.5-.5m-5.25 0H8.2l.61-7h7Z"></svg:path>`,
})
export class CircumHashtagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
