import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineHotelOneStarSolidIcon],svg[streamline-hotel-one-star-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.19.256A1.67 1.67 0 0 1 8.416.83l1.799 2.846l2.274.279a1.651 1.651 0 0 1 1.065 2.72l-.002.001l-1.933 2.217l.626 3.084l.001.003a1.66 1.66 0 0 1-.653 1.662l-.006.004a1.68 1.68 0 0 1-1.78.1L7 12.208l-2.807 1.536a1.68 1.68 0 0 1-1.78-.099l-.006-.004a1.66 1.66 0 0 1-.653-1.662v-.003l.627-3.084L.448 6.676l-.002-.002a1.652 1.652 0 0 1 1.065-2.719l2.274-.279L5.583.831L5.584.83c.15-.24.359-.437.606-.574m1.435 4.603a.625.625 0 1 0-1.25 0c0 .247-.2.447-.447.447H5.57a.625.625 0 1 0 0 1.25h.358q.233 0 .447-.06v2.026H5.57a.625.625 0 1 0 0 1.25h2.86a.625.625 0 1 0 0-1.25h-.805V4.86Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineHotelOneStarSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
