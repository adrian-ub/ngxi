import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMegaphoneOff28FilledIcon],svg[fluent-megaphone-off-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.28 2.22a.75.75 0 1 0-1.06 1.06l5.396 5.397l-3.57.952a2.75 2.75 0 0 0-2.042 2.658v3.426a2.75 2.75 0 0 0 2.041 2.658L7 19.159v.341a4.5 4.5 0 0 0 8.56 1.942l6.574 1.753l2.585 2.585a.75.75 0 0 0 1.061-1.06zM8.5 19.559l5.572 1.486A3 3 0 0 1 8.5 19.559m2.466-11.775L25.463 22.28A2.73 2.73 0 0 0 26 20.647V7.353a2.75 2.75 0 0 0-3.458-2.657z"></svg:path>`,
})
export class FluentMegaphoneOff28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
