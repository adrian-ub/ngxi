import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gridiconsPostsIcon],svg[gridicons-posts-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 19H3v-2h13zm5-10H3v2h18zM3 5v2h11V5zm14 0v2h4V5zm-6 8v2h10v-2zm-8 0v2h5v-2z"></svg:path>`,
})
export class GridiconsPostsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
