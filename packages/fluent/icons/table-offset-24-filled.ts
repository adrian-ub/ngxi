import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTableOffset24FilledIcon],svg[fluent-table-offset-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 3H6.25A3.25 3.25 0 0 0 3 6.25V8.5h11zm1.5 5.5H21V6.25A3.25 3.25 0 0 0 17.75 3H15.5zM21 10H10v4h11zM8.5 10H3v4h5.5zM3 17.75V15.5h11V21H6.25A3.25 3.25 0 0 1 3 17.75M15.5 21v-5.5H21v2.25A3.25 3.25 0 0 1 17.75 21z"></svg:path>`,
})
export class FluentTableOffset24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
