import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMailInboxAdd28RegularIcon],svg[fluent-mail-inbox-add-28-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 7.5a6.5 6.5 0 1 1-13 0a6.5 6.5 0 0 1 13 0m-6-4a.5.5 0 0 0-1 0V7h-3.5a.5.5 0 0 0 0 1H19v3.5a.5.5 0 0 0 1 0V8h3.5a.5.5 0 0 0 0-1H20zM23.5 16v-2.155A7.5 7.5 0 0 0 25 12.6v10.15A3.25 3.25 0 0 1 21.75 26H6.25A3.25 3.25 0 0 1 3 22.75V7.25A3.25 3.25 0 0 1 6.25 4h6.615a7.5 7.5 0 0 0-.595 1.5H6.25A1.75 1.75 0 0 0 4.5 7.25V16h6a.75.75 0 0 1 .743.648l.007.102a2.75 2.75 0 1 0 5.5 0a.75.75 0 0 1 .648-.743L17.5 16zm-19 6.75c0 .966.784 1.75 1.75 1.75h15.5a1.75 1.75 0 0 0 1.75-1.75V17.5h-5.316a4.25 4.25 0 0 1-3.969 3.495L14 21a4.25 4.25 0 0 1-4.142-3.296l-.042-.204H4.5z"></svg:path>`,
})
export class FluentMailInboxAdd28RegularIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
