import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFolder48RegularIcon],svg[fluent-folder-48-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 12.25V16h10.215c.331 0 .649-.132.883-.366l3.384-3.384l-3.384-3.384a1.25 1.25 0 0 0-.883-.366H10.25a3.75 3.75 0 0 0-3.75 3.75m-2.5 0A6.25 6.25 0 0 1 10.25 6h6.465a3.75 3.75 0 0 1 2.651 1.098L23.268 11H37.75A6.25 6.25 0 0 1 44 17.25v17.5A6.25 6.25 0 0 1 37.75 41h-27.5A6.25 6.25 0 0 1 4 34.75zm2.5 6.25v16.25a3.75 3.75 0 0 0 3.75 3.75h27.5a3.75 3.75 0 0 0 3.75-3.75v-17.5a3.75 3.75 0 0 0-3.75-3.75H23.268l-3.902 3.902a3.75 3.75 0 0 1-2.651 1.098z"></svg:path>`,
})
export class FluentFolder48RegularIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
