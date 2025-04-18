import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFilterAdd20RegularIcon],svg[fluent-filter-add-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 9.242a4.5 4.5 0 1 1-5-7.484a4.5 4.5 0 0 1 5 7.484m-2.146-6.096A.5.5 0 0 0 14 3.5V5h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V6h1.5a.5.5 0 0 0 0-1H15V3.5a.5.5 0 0 0-.146-.354M9.022 5H3.5l-.09.008A.5.5 0 0 0 3.5 6h5.522a5.6 5.6 0 0 1 0-1m1.235 4H5.5l-.09.008A.5.5 0 0 0 5.5 10h5.837a5.5 5.5 0 0 1-1.08-1M7.41 13.008L7.5 13h5a.5.5 0 0 1 .09.992L12.5 14h-5a.5.5 0 0 1-.09-.992"></svg:path>`,
})
export class FluentFilterAdd20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
