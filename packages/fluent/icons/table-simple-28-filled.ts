import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTableSimple28FilledIcon],svg[fluent-table-simple-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6.75A3.75 3.75 0 0 1 6.75 3h6.5v10.25H3zm0 8v6.5A3.75 3.75 0 0 0 6.75 25h6.5V14.75zM14.75 25h6.5A3.75 3.75 0 0 0 25 21.25v-6.5H14.75zM25 13.25v-6.5A3.75 3.75 0 0 0 21.25 3h-6.5v10.25z"></svg:path>`,
})
export class FluentTableSimple28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
