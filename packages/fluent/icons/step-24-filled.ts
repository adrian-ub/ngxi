import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentStep24FilledIcon],svg[fluent-step-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.75 2c-.69 0-1.25.56-1.25 1.25V8H9.25C8.56 8 8 8.56 8 9.25v5.25H3.25c-.69 0-1.25.56-1.25 1.25v5c0 .69.56 1.25 1.25 1.25h15.5A3.25 3.25 0 0 0 22 18.75V3.25C22 2.56 21.44 2 20.75 2z"></svg:path>`,
})
export class FluentStep24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
