import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gridiconsThumbsUpIcon],svg[gridicons-thumbs-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.7 22H2v-9h2zM19.999 9H14V5a3 3 0 0 0-3-3h-1v4L7.1 9.625A5.02 5.02 0 0 0 6 12.76V14l2.1 7h8.337a4 4 0 0 0 3.881-3.03l1.621-6.485A2 2 0 0 0 19.999 9"></svg:path>`,
})
export class GridiconsThumbsUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
