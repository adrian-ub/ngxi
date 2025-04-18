import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsCommentDuotoneIcon],svg[lets-icons-comment-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".25" fill-rule="evenodd" d="M5.172 6.172C4 7.343 4 9.229 4 13v5.586c0 .89 1.077 1.337 1.707.707l2.147-2.147c.072-.072.108-.108.154-.127s.097-.019.2-.019H14c1.864 0 2.796 0 3.53-.305a4 4 0 0 0 2.165-2.164C20 13.796 20 12.864 20 11s0-2.796-.305-3.53a4 4 0 0 0-2.164-2.166C16.796 5 15.864 5 14 5h-2C8.229 5 6.343 5 5.172 6.172" clip-rule="evenodd"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.5 9.5h7m-7 3h5"></svg:path></svg:g>`,
})
export class LetsIconsCommentDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
