import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTableSimpleInclude48FilledIcon],svg[fluent-table-simple-include-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 10.75A4.75 4.75 0 0 1 10.75 6h12v16.75H6zm0 14.5v12A4.75 4.75 0 0 0 10.75 42h11.917A6.23 6.23 0 0 1 21 37.75v-10.5c0-.7.115-1.372.327-2zm36-14.5v11.917A6.23 6.23 0 0 0 37.75 21h-10.5c-.7 0-1.372.115-2 .327V6h12A4.75 4.75 0 0 1 42 10.75m-19 16.5A4.25 4.25 0 0 1 27.25 23h10.5A4.25 4.25 0 0 1 42 27.25v10.5A4.25 4.25 0 0 1 37.75 42h-10.5A4.25 4.25 0 0 1 23 37.75z"></svg:path>`,
})
export class FluentTableSimpleInclude48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
