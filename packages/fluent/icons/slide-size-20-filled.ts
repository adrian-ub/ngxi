import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSlideSize20FilledIcon],svg[fluent-slide-size-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6.75A2.75 2.75 0 0 1 4.75 4h10.5A2.75 2.75 0 0 1 18 6.75v6.5A2.75 2.75 0 0 1 15.25 16H4.75A2.75 2.75 0 0 1 2 13.25zm9-.25a.5.5 0 0 0 .5.5h.793l-1.647 1.646a.5.5 0 0 0 .708.708L13 7.707V8.5a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5m-1.646 4.146a.5.5 0 0 0-.708 0L7 12.293V11.5a.5.5 0 0 0-1 0v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 0-1h-.793l1.647-1.646a.5.5 0 0 0 0-.708"></svg:path>`,
})
export class FluentSlideSize20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
