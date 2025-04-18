import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentListBar20RegularIcon],svg[fluent-list-bar-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3a2 2 0 0 0-2 2v1c0 .597.262 1.134.677 1.5A2 2 0 0 0 3 9v2c0 .597.262 1.133.677 1.5A2 2 0 0 0 3 14v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1c0-.597-.262-1.133-.677-1.5c.415-.367.677-.903.677-1.5V9c0-.597-.262-1.134-.677-1.5c.415-.366.677-.903.677-1.5V5a2 2 0 0 0-2-2zM4 14a1 1 0 0 1 1-1h2v3H5a1 1 0 0 1-1-1zm4 2v-3h7a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1zm0-4V8h7a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1zM7 8v4H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1zm0-1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h2zm1 0V4h7a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1z"></svg:path>`,
})
export class FluentListBar20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
