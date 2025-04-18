import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFossifyGalleryIcon],svg[arcticons-fossify-gallery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m20.525 21.222l4.879-6.51c.571-.763 1.158-1.688 2.308-1.688s1.736.925 2.308 1.688L43.07 32.13c1.008 1.344.168 2.846-1.547 2.846H6.476c-1.715 0-2.555-1.502-1.547-2.846l7.709-10.289c.347-.463.89-1.012 1.739-1.012s1.39.549 1.738 1.012l6.321 8.436"></svg:path>`,
})
export class ArcticonsFossifyGalleryIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
