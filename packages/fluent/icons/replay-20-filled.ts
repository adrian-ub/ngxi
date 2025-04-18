import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentReplay20FilledIcon],svg[fluent-replay-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.255 6a7 7 0 1 1-1.242 3.568A.53.53 0 0 0 2.5 9a.474.474 0 0 0-.48.435q-.018.28-.02.565a8 8 0 1 0 1.5-4.665V3.5a.5.5 0 0 0-1 0v3A.5.5 0 0 0 3 7h3a.5.5 0 0 0 0-1zm5.236.88A1 1 0 0 0 8 7.751v4.501a1 1 0 0 0 1.49.872l3.998-2.25a1 1 0 0 0 0-1.743z"></svg:path>`,
})
export class FluentReplay20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
