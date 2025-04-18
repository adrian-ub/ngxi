import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLink28RegularIcon],svg[fluent-link-28-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 8a.75.75 0 0 1 .102 1.493L11 9.5H8a4.5 4.5 0 0 0-.212 8.995L8 18.5h3a.75.75 0 0 1 .102 1.493L11 20H8a6 6 0 0 1-.225-11.996L8 8zm9 0a6 6 0 0 1 .225 11.996L20 20h-3a.75.75 0 0 1-.102-1.493L17 18.5h3a4.5 4.5 0 0 0 .212-8.995L20 9.5h-3a.75.75 0 0 1-.102-1.493L17 8zM8 13.25h12a.75.75 0 0 1 .102 1.493L20 14.75H8a.75.75 0 0 1-.102-1.493zh12z"></svg:path>`,
})
export class FluentLink28RegularIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
