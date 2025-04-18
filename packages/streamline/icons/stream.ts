import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineStreamIcon],svg[streamline-stream-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M4.16 8.66a2.57 2.57 0 0 1 1.658-.587l1.636-3.566a3.062 3.062 0 1 1 3.444 2.34L8.227 9.761a2.585 2.585 0 1 1-4.993 1.196"></svg:path><svg:path d="M9.147 3.795a1.319 1.319 0 1 0 2.634-.152a1.319 1.319 0 1 0-2.634.152M1.011 6.93L5.6 9.483c.467.26.68.818.507 1.324v0c-.202.588-.85.893-1.432.674L.56 9.936"></svg:path></svg:g>`,
})
export class StreamlineStreamIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
