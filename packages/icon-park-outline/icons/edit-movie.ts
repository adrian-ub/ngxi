import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineEditMovieIcon],svg[icon-park-outline-edit-movie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="M43 9v30h-9v-8h9V17h-9V9zM5 17V9h9v8zv14h9v8H5z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M43 17V9h-9m9 8v14m0-14h-9M5 17V9h9m-9 8v14m0-14h9M5 31v8h9m-9-8h9m29 0v8h-9m9-8h-9m0-22v8m0-8h-4m4 30v-8m0 8h-4M14 9v8m0-8h4m-4 30v-8m0 8h4m-4-22h4m16 0h-4m4 14h-4m-16 0h4"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="4" d="M24 7v4m0 6v4m0 6v4m0 6v4"></svg:path></svg:g>`,
})
export class IconParkOutlineEditMovieIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
