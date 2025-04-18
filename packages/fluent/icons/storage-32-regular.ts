import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentStorage32RegularIcon],svg[fluent-storage-32-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 13.5A4.5 4.5 0 0 1 6.5 9h19a4.5 4.5 0 0 1 4.5 4.5v5a4.5 4.5 0 0 1-4.5 4.5h-19A4.5 4.5 0 0 1 2 18.5zM6.5 11A2.5 2.5 0 0 0 4 13.5v5A2.5 2.5 0 0 0 6.5 21h19a2.5 2.5 0 0 0 2.5-2.5v-5a2.5 2.5 0 0 0-2.5-2.5zM21 14.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m3.5 1.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3"></svg:path>`,
})
export class FluentStorage32RegularIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
