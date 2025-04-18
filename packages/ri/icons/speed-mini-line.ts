import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riSpeedMiniLineIcon],svg[ri-speed-mini-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.032 12L6 9.86v4.28zm-4.244 5.443A.5.5 0 0 1 4 17.035V6.965a.5.5 0 0 1 .788-.409l7.133 5.035a.5.5 0 0 1 0 .817zM15 14.14L18.032 12L15 9.86zm-2-7.175a.5.5 0 0 1 .788-.409l7.133 5.035a.5.5 0 0 1 0 .817l-7.133 5.035a.5.5 0 0 1-.788-.408z"></svg:path>`,
})
export class RiSpeedMiniLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
