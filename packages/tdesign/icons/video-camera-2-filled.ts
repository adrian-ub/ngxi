import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignVideoCamera2FilledIcon],svg[tdesign-video-camera-2-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.5 10H18v3l5-2.477v10.954L18 19v3H1V10h1.55a3.5 3.5 0 1 1 5.025-4.87A5.001 5.001 0 1 1 15.501 10M8.29 8.698A3.5 3.5 0 0 1 7.45 10H9.5a5 5 0 0 1-1.21-1.302"></svg:path>`,
})
export class TdesignVideoCamera2FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
