import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFStop24FilledIcon],svg[fluent-f-stop-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.442 6.57a3 3 0 0 1 3.94-2.33l.59.205a1 1 0 0 0 .656-1.89l-.592-.205a5 5 0 0 0-6.566 3.883l-.728 4.267H7a1 1 0 0 0 0 2h3.4l-.69 4.042a3 3 0 0 1-4.403 2.123l-.075-.041a1 1 0 0 0-.964 1.752l.076.042c3.012 1.657 6.76-.15 7.338-3.54l.747-4.378H16a1 1 0 1 0 0-2h-3.23z"></svg:path>`,
})
export class FluentFStop24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
