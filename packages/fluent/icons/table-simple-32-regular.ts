import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTableSimple32RegularIcon],svg[fluent-table-simple-32-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 7.5A4.5 4.5 0 0 1 7.5 3h17A4.5 4.5 0 0 1 29 7.5v17a4.5 4.5 0 0 1-4.5 4.5h-17A4.5 4.5 0 0 1 3 24.5zM7.5 5A2.5 2.5 0 0 0 5 7.5V15h10V5zM17 5v10h10V7.5A2.5 2.5 0 0 0 24.5 5zm-2 12H5v7.5A2.5 2.5 0 0 0 7.5 27H15zm2 10h7.5a2.5 2.5 0 0 0 2.5-2.5V17H17z"></svg:path>`,
})
export class FluentTableSimple32RegularIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
