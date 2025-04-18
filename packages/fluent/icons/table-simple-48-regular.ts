import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTableSimple48RegularIcon],svg[fluent-table-simple-48-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.25 6h25.5C39.65 6 42 8.35 42 11.25v25.5c0 2.9-2.35 5.25-5.25 5.25h-25.5A5.25 5.25 0 0 1 6 36.75v-25.5C6 8.35 8.35 6 11.25 6M23 8.5H11.25a2.75 2.75 0 0 0-2.75 2.75v11.5H23zM8.5 25.25v11.5a2.75 2.75 0 0 0 2.75 2.75H23V25.25zm17 14.25h11.25a2.75 2.75 0 0 0 2.75-2.75v-11.5h-14zm14-16.75v-11.5a2.75 2.75 0 0 0-2.75-2.75H25.5v14.25z"></svg:path>`,
})
export class FluentTableSimple48RegularIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
