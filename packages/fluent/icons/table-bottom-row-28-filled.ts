import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTableBottomRow28FilledIcon],svg[fluent-table-bottom-row-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.75 3A3.75 3.75 0 0 0 3 6.75V17h1.5V6.75A2.25 2.25 0 0 1 6.75 4.5h14.5a2.25 2.25 0 0 1 2.25 2.25V17H25V6.75A3.75 3.75 0 0 0 21.25 3zM3 21.25A3.75 3.75 0 0 0 6.75 25H9.5v-6.5H3zM17 25h-6v-6.5h6zm4.25 0H18.5v-6.5H25v2.75A3.75 3.75 0 0 1 21.25 25"></svg:path>`,
})
export class FluentTableBottomRow28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
