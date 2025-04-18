import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[monoIconsBookmarkIcon],svg[mono-icons-bookmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v17a1 1 0 0 1-1.581.814L12 17.229l-6.419 4.585A1 1 0 0 1 4 21zm14 0H6v15.057l5.419-3.87a1 1 0 0 1 1.162 0L18 19.056z"></svg:path>`,
})
export class MonoIconsBookmarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
