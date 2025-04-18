import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCursorHover28FilledIcon],svg[fluent-cursor-hover-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 7.75A2.75 2.75 0 0 1 4.75 5h18.5A2.75 2.75 0 0 1 26 7.75v11.5A2.75 2.75 0 0 1 23.25 22h-.073a1.75 1.75 0 0 0-.44-1.737l-9-9A1.75 1.75 0 0 0 10.75 12.5V22h-6A2.75 2.75 0 0 1 2 19.25zm11.03 4.22a.75.75 0 0 0-1.28.53v12.75a.75.75 0 0 0 1.326.48l3.393-4.071a.25.25 0 0 1 .227-.088l4.698.671a.75.75 0 0 0 .636-1.272z"></svg:path>`,
})
export class FluentCursorHover28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
