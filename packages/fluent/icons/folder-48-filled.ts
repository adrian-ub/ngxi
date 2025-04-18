import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFolder48FilledIcon],svg[fluent-folder-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 12.25A6.25 6.25 0 0 1 10.25 6h6.465a3.75 3.75 0 0 1 2.651 1.098l3.384 3.384l-5.152 5.152a1.25 1.25 0 0 1-.883.366H4zm0 6.25v16.25A6.25 6.25 0 0 0 10.25 41h27.5A6.25 6.25 0 0 0 44 34.75v-17.5A6.25 6.25 0 0 0 37.75 11H25.768l-6.402 6.402a3.75 3.75 0 0 1-2.651 1.098z"></svg:path>`,
})
export class FluentFolder48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
