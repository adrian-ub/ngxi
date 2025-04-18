import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonBookmarkOffThinIcon],svg[iconamoon-bookmark-off-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round"><svg:path stroke-linejoin="round" d="M8.657 3H16a2 2 0 0 1 2 2v7.343M6 6v15l6-3l6 3v-3"></svg:path><svg:path d="m4 4l16 16"></svg:path></svg:g>`,
})
export class IconamoonBookmarkOffThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
