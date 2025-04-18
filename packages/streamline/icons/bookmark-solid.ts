import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineBookmarkSolidIcon],svg[streamline-bookmark-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 0a1.5 1.5 0 0 0-1.5 1.5v12a.5.5 0 0 0 .854.354L7 10.207l3.646 3.647a.5.5 0 0 0 .854-.354v-12A1.5 1.5 0 0 0 10 0z"></svg:path>`,
})
export class StreamlineBookmarkSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
