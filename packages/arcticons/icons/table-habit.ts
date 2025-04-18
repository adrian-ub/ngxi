import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTableHabitIcon],svg[arcticons-table-habit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.422 5.5h11.354v30.743L9.422 42.5zm19.13 0H39.94v17.34l-11.388 6.303z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.492 17.046H9.59l-1.148-.856l-1.823.99l2.802 7h23.237zm2.329 13.998c3.072 0 5.56 2.499 5.56 5.582s-2.488 5.593-5.56 5.593s-5.559-2.51-5.559-5.593s2.487-5.582 5.56-5.582"></svg:path>`,
})
export class ArcticonsTableHabitIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
