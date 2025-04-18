import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeShockedIcon],svg[icomoon-free-shocked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M8 1.5a6.5 6.5 0 1 1 0 13a6.5 6.5 0 0 1 0-13M6 11a2 2 0 1 1 3.999-.001A2 2 0 0 1 6 11m4-5.5c0-.828.448-1.5 1-1.5s1 .672 1 1.5S11.552 7 11 7s-1-.672-1-1.5m-6 0C4 4.672 4.448 4 5 4s1 .672 1 1.5S5.552 7 5 7s-1-.672-1-1.5"></svg:path>`,
})
export class IcomoonFreeShockedIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
