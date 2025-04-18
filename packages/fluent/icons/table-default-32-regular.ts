import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTableDefault32RegularIcon],svg[fluent-table-default-32-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 7.5A4.5 4.5 0 0 1 7.5 3h17A4.5 4.5 0 0 1 29 7.5v17a4.5 4.5 0 0 1-4.5 4.5h-17A4.5 4.5 0 0 1 3 24.5zM7.5 5A2.5 2.5 0 0 0 5 7.5V11h6V5zM5 13v6h6v-6zm8 0v6h6v-6zm8 0v6h6v-6zm-2 8h-6v6h6zm2 6h3.5a2.5 2.5 0 0 0 2.5-2.5V21h-6zm0-16h6V7.5A2.5 2.5 0 0 0 24.5 5H21zm-2-6h-6v6h6zM5 21v3.5A2.5 2.5 0 0 0 7.5 27H11v-6z"></svg:path>`,
})
export class FluentTableDefault32RegularIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
