import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDesktop48RegularIcon],svg[fluent-desktop-48-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.25 5A4.25 4.25 0 0 0 4 9.25v23.5A4.25 4.25 0 0 0 8.25 37H17v3.5h-2.75a1.25 1.25 0 1 0 0 2.5h19.5a1.25 1.25 0 1 0 0-2.5H31V37h8.75A4.25 4.25 0 0 0 44 32.75V9.25A4.25 4.25 0 0 0 39.75 5zM28.5 37v3.5h-9V37zM6.5 9.25c0-.966.784-1.75 1.75-1.75h31.5c.967 0 1.75.784 1.75 1.75v23.5a1.75 1.75 0 0 1-1.75 1.75H8.25a1.75 1.75 0 0 1-1.75-1.75z"></svg:path>`,
})
export class FluentDesktop48RegularIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
