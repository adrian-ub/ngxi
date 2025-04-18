import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riBookmark3FillIcon],svg[ri-bookmark-3-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2h16a1 1 0 0 1 1 1v19.276a.5.5 0 0 1-.704.457L12 19.03l-8.296 3.702A.5.5 0 0 1 3 22.276V3a1 1 0 0 1 1-1m8 11.5l2.939 1.545l-.561-3.272l2.377-2.318l-3.285-.478L12 6l-1.47 2.977l-3.285.478l2.377 2.318l-.56 3.272z"></svg:path>`,
})
export class RiBookmark3FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
