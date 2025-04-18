import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMailDataBar24FilledIcon],svg[fluent-mail-data-bar-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 8.608v3.442a2.5 2.5 0 0 0-2 .45a2.5 2.5 0 0 0-1.272-2.178zM5.25 20H11v-3.5a2.5 2.5 0 0 1 4-2v-2q0-.117.01-.23l-2.662 1.394a.75.75 0 0 1-.696 0L2 8.608v8.142l.005.184A3.25 3.25 0 0 0 5.25 20m0-16h13.5a3.25 3.25 0 0 1 3.234 2.924L12 12.154l-9.984-5.23a3.25 3.25 0 0 1 3.048-2.919zm12.25 7a1.5 1.5 0 0 0-1.5 1.5v8a1.5 1.5 0 0 0 3 0v-8a1.5 1.5 0 0 0-1.5-1.5m4 2a1.5 1.5 0 0 0-1.5 1.5v6a1.5 1.5 0 0 0 3 0v-6a1.5 1.5 0 0 0-1.5-1.5M12 16.5a1.5 1.5 0 0 1 3 0v4a1.5 1.5 0 0 1-3 0z"></svg:path>`,
})
export class FluentMailDataBar24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
