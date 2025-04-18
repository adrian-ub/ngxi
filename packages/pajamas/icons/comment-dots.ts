import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasCommentDotsIcon],svg[pajamas-comment-dots-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 1a3 3 0 0 0-3 3v11.25a.75.75 0 0 0 1.28.53L4.063 13H13a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3zM1.5 4A1.5 1.5 0 0 1 3 2.5h10A1.5 1.5 0 0 1 14.5 4v6a1.5 1.5 0 0 1-1.5 1.5H3.443l-.22.22L1.5 13.44zM11 8a1 1 0 1 0 0-2a1 1 0 0 0 0 2M9 7a1 1 0 1 1-2 0a1 1 0 0 1 2 0M5 8a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd"></svg:path>`,
})
export class PajamasCommentDotsIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
