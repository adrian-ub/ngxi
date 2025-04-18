import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[evaUploadFillIcon],svg[eva-upload-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="16" height="2" x="4" y="4" fill="currentColor" rx="1" ry="1" transform="rotate(180 12 5)"></svg:rect><svg:rect width="4" height="2" x="17" y="5" fill="currentColor" rx="1" ry="1" transform="rotate(90 19 6)"></svg:rect><svg:rect width="4" height="2" x="3" y="5" fill="currentColor" rx="1" ry="1" transform="rotate(90 5 6)"></svg:rect><svg:path fill="currentColor" d="M8 14a1 1 0 0 1-.8-.4a1 1 0 0 1 .2-1.4l4-3a1 1 0 0 1 1.18 0l4 2.82a1 1 0 0 1 .24 1.39a1 1 0 0 1-1.4.24L12 11.24L8.6 13.8a1 1 0 0 1-.6.2"></svg:path><svg:path fill="currentColor" d="M12 21a1 1 0 0 1-1-1v-8a1 1 0 0 1 2 0v8a1 1 0 0 1-1 1"></svg:path>`,
})
export class EvaUploadFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
