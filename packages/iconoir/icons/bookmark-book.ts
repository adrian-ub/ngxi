import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirBookmarkBookIcon],svg[iconoir-bookmark-book-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M4 19V5a2 2 0 0 1 2-2h13.4a.6.6 0 0 1 .6.6v13.114"></svg:path><svg:path stroke-linejoin="round" d="M8 3v8l2.5-1.6L13 11V3"></svg:path><svg:path d="M6 17h14M6 21h14"></svg:path><svg:path stroke-linejoin="round" d="M6 21a2 2 0 1 1 0-4"></svg:path></svg:g>`,
})
export class IconoirBookmarkBookIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
