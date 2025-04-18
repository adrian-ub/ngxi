import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLeafOne20FilledIcon],svg[fluent-leaf-one-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.072 2.462a1.5 1.5 0 0 0-2.144 0L5.691 5.77a6.03 6.03 0 0 0 .057 8.493l.01.009A5.98 5.98 0 0 0 9.5 16.007V17.5a.5.5 0 1 0 1 0v-1.491a5.98 5.98 0 0 0 3.743-1.737l.009-.01l.011-.01a6.03 6.03 0 0 0 .046-8.482zm-.572 12.53a5 5 0 0 1-1 0V9.498a.5.5 0 1 1 1 0z"></svg:path>`,
})
export class FluentLeafOne20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
