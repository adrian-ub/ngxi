import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsBookmarkSolidIcon],svg[teenyicons-bookmark-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 0H2v14.5a.5.5 0 0 0 .812.39L7.5 11.14l4.688 3.75A.5.5 0 0 0 13 14.5z"></svg:path>`,
})
export class TeenyiconsBookmarkSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
