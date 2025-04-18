import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggStoriesIcon],svg[gg-stories-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M15 6H9a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1M9 4a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3z" clip-rule="evenodd"></svg:path><svg:path d="M2 6a1 1 0 0 1 2 0v12a1 1 0 1 1-2 0zm18 0a1 1 0 1 1 2 0v12a1 1 0 1 1-2 0z"></svg:path></svg:g>`,
})
export class GgStoriesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
