import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDiamond32FilledIcon],svg[fluent-diamond-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.318 12.818a4.5 4.5 0 0 0 0 6.364l9.5 9.5a4.5 4.5 0 0 0 6.364 0l9.5-9.5a4.5 4.5 0 0 0 0-6.364l-9.5-9.5a4.5 4.5 0 0 0-6.364 0z"></svg:path>`,
})
export class FluentDiamond32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
