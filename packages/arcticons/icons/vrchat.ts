import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsVrchatIcon],svg[arcticons-vrchat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 10.364h-29a4 4 0 0 0-4 4v14a4 4 0 0 0 4 4h21.156l3.606 4.817c.651.87 2.034.409 2.034-.678v-4.139H38.5a4 4 0 0 0 4-4v-14a4 4 0 0 0-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.403 26.663V16.066h3.47c1.96 0 3.55 1.593 3.55 3.559s-1.59 3.559-3.55 3.559h-3.47m3.469 0l3.47 3.476m-9.745-10.594l-3.51 10.597l-3.511-10.597"></svg:path>`,
})
export class ArcticonsVrchatIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
