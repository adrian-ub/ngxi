import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLitresIcon],svg[arcticons-litres-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M40.938 8.707H5.688c-.137 0-.207.179-.11.275c.55.553 1.674 1.884 1.674 3.528c0 1.683-1.178 3.16-1.712 3.742c-.09.098-.02.265.113.265h35.28a.14.14 0 0 0 .118-.062c.228-.345 1.316-2.09 1.316-3.945S41.28 9.074 41.05 8.762a.14.14 0 0 0-.113-.055m.135 11.388H5.82c-.137 0-.206.179-.11.276c.55.552 1.674 1.884 1.674 3.527c0 1.683-1.178 3.16-1.712 3.742c-.089.098-.019.265.113.265h35.281a.14.14 0 0 0 .117-.062c.228-.345 1.316-2.09 1.316-3.945s-1.087-3.436-1.316-3.747a.14.14 0 0 0-.112-.056m.001 11.388H5.82c-.137 0-.206.179-.11.276c.55.552 1.674 1.884 1.674 3.528c0 1.682-1.178 3.159-1.712 3.742c-.089.097-.019.264.113.264h35.28a.14.14 0 0 0 .118-.061c.228-.346 1.316-2.09 1.316-3.945s-1.087-3.436-1.316-3.748a.14.14 0 0 0-.112-.056Z"></svg:path>`,
})
export class ArcticonsLitresIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
