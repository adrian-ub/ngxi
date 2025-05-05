import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconWindsocketIcon],svg[picon-windsocket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 1l2-1v8H1V2M3 .5L5 1v4l-2 .5m3-4L8 2v2l-2 .5"></svg:path>`,
})
export class PiconWindsocketIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
