import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceDislikeIcon],svg[guidance-dislike-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M1.5 15V3m17 .5v.16a16 16 0 0 0 3.761 10.307l.239.283v.25h-9V18a3.5 3.5 0 0 1-3.5 3.5h-.5V19A4.5 4.5 0 0 0 5 14.5h-.5v-11z"></svg:path>`,
})
export class GuidanceDislikeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
