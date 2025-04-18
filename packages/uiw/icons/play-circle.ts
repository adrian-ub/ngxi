import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uiwPlayCircleIcon],svg[uiw-play-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10S4.477 0 10 0M8.182 5.904v8.193c0 .467.436.585.718.28l3.675-3.961a.644.644 0 0 0 0-.831L8.9 5.623c-.282-.305-.718-.187-.718.281"></svg:path>`,
})
export class UiwPlayCircleIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
