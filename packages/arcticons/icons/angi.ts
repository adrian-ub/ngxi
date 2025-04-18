import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAngiIcon],svg[arcticons-angi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m32.464 39.567l5.895.053L32.61 4.5h-8.584l-2.663 18.146c-.214 1.97-1.725 15.785-4.31 15.238c-5.07-3.454.625-9.686 3.088-9.28c9.285-1.3 11.791 2.027 12.324 10.963Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m28.466 9.954l-1.94 13.23a8.2 8.2 0 0 1 2.6.726a14 14 0 0 1 1.364.76ZM14.82 42.677a10.48 10.48 0 0 1-4.631-12.436a9.71 9.71 0 0 1 10.997-6.696"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.682 42.607c8.203 4.103 10.078-6.858 11.131-14.003"></svg:path>`,
})
export class ArcticonsAngiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
