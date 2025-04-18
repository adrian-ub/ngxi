import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMailRead28FilledIcon],svg[fluent-mail-read-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.237 2.841a3.75 3.75 0 0 1 3.53 0l8.248 4.4c.45.24.839.565 1.15.948L14 13.91L2.839 8.19a3.7 3.7 0 0 1 1.15-.95zM2.147 9.522q-.142.497-.143 1.028v8.7A3.75 3.75 0 0 0 5.754 23H22.25A3.75 3.75 0 0 0 26 19.25v-8.7c0-.353-.05-.7-.143-1.03l-11.515 5.898a.75.75 0 0 1-.684 0z"></svg:path>`,
})
export class FluentMailRead28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
