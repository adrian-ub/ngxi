import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDesktopEdit16FilledIcon],svg[fluent-desktop-edit-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.98 6.377l4.83-4.83a1.87 1.87 0 1 1 2.644 2.646l-4.83 4.829a2.2 2.2 0 0 1-1.02.578l-1.498.374a.89.89 0 0 1-1.079-1.078l.375-1.498a2.2 2.2 0 0 1 .578-1.02m-.707-.707L9.943 2H3.5A1.5 1.5 0 0 0 2 3.5v6.997a1.5 1.5 0 0 0 1.5 1.5H6V13H4.495a.5.5 0 0 0 0 1H11.5a.5.5 0 1 0 0-1H10v-1.003h2.501a1.5 1.5 0 0 0 1.5-1.5V6.06l-3.67 3.67c-.41.409-.923.7-1.485.84l-1.498.374c-1.383.346-2.637-.907-2.29-2.29l.374-1.499a3.2 3.2 0 0 1 .84-1.485M9 11.997V13H7v-1.003z"></svg:path>`,
})
export class FluentDesktopEdit16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
