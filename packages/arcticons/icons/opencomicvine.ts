import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsOpencomicvineIcon],svg[arcticons-opencomicvine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m36.404 19l-5.075 10l-1.55-10m-2.591 6.647l-.007.04C26.858 27.518 25.113 29 23.284 29h0c-1.83 0-3.051-1.483-2.728-3.312l.595-3.375c.322-1.83 2.067-3.313 3.896-3.313h0c1.83 0 3.051 1.483 2.729 3.313l-.008.04M14.376 29c-1.83 0-3.051-1.483-2.729-3.312l.595-3.375C12.565 20.483 14.31 19 16.14 19h0c1.83 0 3.05 1.483 2.728 3.313l-.595 3.375C17.95 27.517 16.205 29 14.376 29"></svg:path>`,
})
export class ArcticonsOpencomicvineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
