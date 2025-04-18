import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uiwPlayCircleOIcon],svg[uiw-play-circle-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10S4.477 0 10 0m0 1.395a8.605 8.605 0 1 0 0 17.21a8.605 8.605 0 0 0 0-17.21M8.182 5.904c0-.468.436-.586.718-.281l3.675 3.962a.644.644 0 0 1 0 .831L8.9 14.377c-.282.305-.718.187-.718-.28Z"></svg:path>`,
})
export class UiwPlayCircleOIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
