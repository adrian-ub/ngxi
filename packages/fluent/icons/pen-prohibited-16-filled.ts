import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPenProhibited16FilledIcon],svg[fluent-pen-prohibited-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.44 1.56a1.914 1.914 0 0 0-2.707 0L2.338 8.956a1.65 1.65 0 0 0-.398.644l-.914 2.743a.5.5 0 0 0 .632.633l2.743-.915c.243-.08.463-.217.644-.398l.065-.064a5.5 5.5 0 0 1 6.489-6.488l.841-.842a1.914 1.914 0 0 0 0-2.707M6 10.5a4.5 4.5 0 1 0 9 0a4.5 4.5 0 0 0-9 0m1 0a3.5 3.5 0 0 1 5.596-2.803l-4.9 4.9A3.5 3.5 0 0 1 7 10.5m3.5 3.5a3.5 3.5 0 0 1-2.096-.697l4.9-4.899A3.5 3.5 0 0 1 10.5 14"></svg:path>`,
})
export class FluentPenProhibited16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
