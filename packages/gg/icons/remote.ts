import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggRemoteIcon],svg[gg-remote-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.051 4.322l1.415 1.414l-4.243 4.243l4.243 4.242l-1.415 1.415l-5.656-5.657zM6.949 19.679l-1.415-1.415l4.243-4.242l-4.243-4.243L6.95 8.365l5.656 5.657z"></svg:path>`,
})
export class GgRemoteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
