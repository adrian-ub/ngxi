import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsHourglassBottomIcon],svg[bxs-hourglass-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 2H4v2h1v1a7.01 7.01 0 0 0 3.433 6.02c.355.21.567.547.567.901v.158c0 .354-.212.691-.566.9A7.02 7.02 0 0 0 5 19v1H4v2h16v-2h-1v-1a7.02 7.02 0 0 0-3.434-6.021c-.354-.208-.566-.545-.566-.9v-.158c0-.354.212-.69.566-.9A7.02 7.02 0 0 0 19 5V4h1V2zm12 3a5.01 5.01 0 0 1-2.45 4.299A3.1 3.1 0 0 0 13.166 11h-2.332a3.1 3.1 0 0 0-1.385-1.702A5.01 5.01 0 0 1 7 5V4h10z"></svg:path>`,
})
export class BxsHourglassBottomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
