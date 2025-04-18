import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentAttachText24FilledIcon],svg[fluent-attach-text-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 3a5 5 0 0 1 4.995 4.783L12 8v11a3 3 0 0 1-5.995.176L6 19V9a1 1 0 0 1 1.993-.117L8 9v10a1 1 0 0 0 1.993.117L10 19V8a3 3 0 0 0-5.995-.176L4 8v9a1 1 0 0 1-1.993.117L2 17V8a5 5 0 0 1 5-5m8 14h2a1 1 0 0 1 .117 1.993L17 19h-2a1 1 0 0 1-.117-1.993zh2zm0-4h5.5a1 1 0 0 1 .117 1.993L20.5 15H15a1 1 0 0 1-.117-1.993zh5.5zm0-4h5.5a1 1 0 0 1 .117 1.993L20.5 11H15a1 1 0 0 1-.117-1.993zh5.5zm0-4h5.5a1 1 0 0 1 .117 1.993L20.5 7H15a1 1 0 0 1-.117-1.993zh5.5z"></svg:path>`,
})
export class FluentAttachText24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
