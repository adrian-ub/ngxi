import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMailInboxCheckmark28FilledIcon],svg[fluent-mail-inbox-checkmark-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.5 16v-2.155A7.5 7.5 0 0 0 25 12.6v10.15A3.25 3.25 0 0 1 21.75 26H6.25A3.25 3.25 0 0 1 3 22.75V7.25A3.25 3.25 0 0 1 6.25 4h6.615a7.5 7.5 0 0 0-.595 1.5H6.25A1.75 1.75 0 0 0 4.5 7.25V16h6a.75.75 0 0 1 .743.648l.007.102a2.75 2.75 0 1 0 5.5 0a.75.75 0 0 1 .648-.743L17.5 16zm-4-2a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13m3.854-8.646l-5 5a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L18 9.293l4.646-4.647a.5.5 0 0 1 .708.708"></svg:path>`,
})
export class FluentMailInboxCheckmark28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
