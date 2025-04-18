import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFilmstripPlay16FilledIcon],svg[fluent-filmstrip-play-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 3A2.5 2.5 0 0 0 1 5.5v5A2.5 2.5 0 0 0 3.5 13h9a2.5 2.5 0 0 0 2.5-2.5v-5A2.5 2.5 0 0 0 12.5 3zm9 2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5M12 9.5a.5.5 0 0 1 1 0v1a.5.5 0 0 1-1 0zM3.5 5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5M3 9.5a.5.5 0 0 1 1 0v1a.5.5 0 0 1-1 0zm4-3c0-.385.346-.626.62-.43l2.206 1.56c.233.165.233.573 0 .738L7.621 9.93C7.346 10.126 7 9.885 7 9.499z"></svg:path>`,
})
export class FluentFilmstripPlay16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
