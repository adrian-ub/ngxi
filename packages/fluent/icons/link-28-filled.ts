import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLink28FilledIcon],svg[fluent-link-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 8a1 1 0 0 1 .117 1.993L11 10H8a4 4 0 0 0-.2 7.995L8 18h3a1 1 0 0 1 .117 1.993L11 20H8a6 6 0 0 1-.225-11.996L8 8zm9 0a6 6 0 0 1 .225 11.996L20 20h-3a1 1 0 0 1-.117-1.993L17 18h3a4 4 0 0 0 .2-7.995L20 10h-3a1 1 0 0 1-.117-1.993L17 8zM8 13h12a1 1 0 0 1 .117 1.993L20 15H8a1 1 0 0 1-.117-1.993zh12z"></svg:path>`,
})
export class FluentLink28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
