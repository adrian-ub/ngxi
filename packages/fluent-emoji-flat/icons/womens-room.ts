import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatWomensRoomIcon],svg[fluent-emoji-flat-womens-room-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#8D65C5" d="M2 6a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v20a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z"></svg:path><svg:path fill="#fff" d="M18.441 7.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m-5.375 3.438a2 2 0 0 0-1.933 1.486l-1.13 4.257a1 1 0 1 0 1.932.513l1.067-3.98a.3.3 0 0 1 .31-.223l.126.007a.47.47 0 0 1 .445.47h.008l-1.932 6.913a.5.5 0 0 0 .481.635h1.06v4.956c0 .539.414 1.002.952 1.027A1 1 0 0 0 15.5 26v-4.484a.5.5 0 1 1 1 0v4.456c0 .539.414 1.002.952 1.027A1 1 0 0 0 18.5 26v-4.984h1.08a.5.5 0 0 0 .483-.632L18.17 13.43c0-.231.178-.426.407-.45a.46.46 0 0 1 .495.335l1.056 3.885a1 1 0 1 0 1.93-.525l-1.16-4.262a2 2 0 0 0-1.929-1.476z"></svg:path></svg:g>`,
})
export class FluentEmojiFlatWomensRoomIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
