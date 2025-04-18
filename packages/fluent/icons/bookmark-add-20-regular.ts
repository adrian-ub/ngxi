import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBookmarkAdd20RegularIcon],svg[fluent-bookmark-add-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 5.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-4-2a.5.5 0 0 0-1 0V5h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V6h1.5a.5.5 0 0 0 0-1H15zm0 13.018v-5.54a5.5 5.5 0 0 0 1-.185V17.5a.5.5 0 0 1-.794.404L10 14.118l-5.206 3.786A.5.5 0 0 1 4 17.5v-13A2.5 2.5 0 0 1 6.5 2h3.757A5.5 5.5 0 0 0 9.6 3H6.5A1.5 1.5 0 0 0 5 4.5v12.018l4.706-3.422a.5.5 0 0 1 .588 0z"></svg:path>`,
})
export class FluentBookmarkAdd20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
