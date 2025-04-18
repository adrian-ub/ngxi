import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riBookmark2LineIcon],svg[ri-bookmark-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 2h14a1 1 0 0 1 1 1v19.143a.5.5 0 0 1-.766.424L12 18.03l-7.234 4.536A.5.5 0 0 1 4 22.143V3a1 1 0 0 1 1-1m13 2H6v15.432l6-3.761l6 3.761zM8 9h8v2H8z"></svg:path>`,
})
export class RiBookmark2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
