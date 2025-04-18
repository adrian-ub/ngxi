import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siVideoFillIcon],svg[si-video-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.383 5.076A1 1 0 0 1 24 6v12a1 1 0 0 1-1.707.707l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.09-.217M3.4 6h8.2A2.4 2.4 0 0 1 14 8.4v7.2a2.4 2.4 0 0 1-2.4 2.4H3.4A2.4 2.4 0 0 1 1 15.6V8.4A2.4 2.4 0 0 1 3.4 6"></svg:path>`,
})
export class SiVideoFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
