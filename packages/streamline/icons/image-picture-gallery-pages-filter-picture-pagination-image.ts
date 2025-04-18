import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineImagePictureGalleryPagesFilterPicturePaginationImageIcon],svg[streamline-image-picture-gallery-pages-filter-picture-pagination-image-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="10.5" height="8.5" x="3" y="4" rx="1" transform="rotate(180 8.25 8.25)"></svg:rect><svg:path d="M.5 10V2.5a1 1 0 0 1 1-1h9M3.6 12.42l3.93-4.15A1 1 0 0 1 9 8.26l3.95 4.14"></svg:path></svg:g>`,
})
export class StreamlineImagePictureGalleryPagesFilterPicturePaginationImageIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
