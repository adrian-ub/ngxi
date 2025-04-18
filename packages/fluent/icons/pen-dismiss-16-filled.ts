import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPenDismiss16FilledIcon],svg[fluent-pen-dismiss-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.733 1.56a1.914 1.914 0 0 1 2.707 2.708l-.842.842a5.5 5.5 0 0 0-6.489 6.488l-.064.064a1.65 1.65 0 0 1-.644.398l-2.743.914a.5.5 0 0 1-.632-.632l.914-2.743c.08-.243.217-.463.398-.644zM15 10.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-2.646-1.146a.5.5 0 0 0-.708-.708L10.5 9.793L9.354 8.646a.5.5 0 1 0-.708.708L9.793 10.5l-1.147 1.146a.5.5 0 0 0 .708.708l1.146-1.147l1.146 1.147a.5.5 0 0 0 .708-.708L11.207 10.5z"></svg:path>`,
})
export class FluentPenDismiss16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
