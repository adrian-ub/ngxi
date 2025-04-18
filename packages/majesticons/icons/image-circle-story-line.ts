import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsImageCircleStoryLineIcon],svg[majesticons-image-circle-story-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M11.23 13.92c1.598.614 2.56 1.587 3.77 3.08m-3.77-3.08c-1.943-.747-3.405-.942-4.73-.92m4.73.92c1.515-1.666 2.51-2.867 6.27-3.42M10 10"></svg:path><svg:circle cx="12" cy="12" r="6"></svg:circle><svg:path d="M22 12a10 10 0 0 1-.832 4M12 22a9.97 9.97 0 0 0 7.071-2.929M2 12a9.97 9.97 0 0 1 2.929-7.071M12 2a10 10 0 0 0-4 .832m0 18.336A10.02 10.02 0 0 1 2.832 16m13-13A10.02 10.02 0 0 1 21 8.168"></svg:path></svg:g>`,
})
export class MajesticonsImageCircleStoryLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
