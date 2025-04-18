import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsComment1ShareIcon],svg[lineicons-comment-1-share-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.368 8.124a.75.75 0 0 0-1.28.53v1.008a5.03 5.03 0 0 0-4.167 6.033a.75.75 0 0 0 1.466 0a3.53 3.53 0 0 1 2.7-2.703v.872a.75.75 0 0 0 1.281.53l2.605-2.605a.75.75 0 0 0 0-1.06z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M2.5 12.096a9.5 9.5 0 1 1 9.5 9.5H3.25a.75.75 0 0 1-.53-1.28l2.053-2.054A9.47 9.47 0 0 1 2.5 12.096m9.5-8a8 8 0 0 0-5.657 13.657a.75.75 0 0 1 0 1.06l-1.282 1.283H12a8 8 0 1 0 0-16" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsComment1ShareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
