import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLaptop16FilledIcon],svg[fluent-laptop-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5.5A1.5 1.5 0 0 1 4.5 4h7A1.5 1.5 0 0 1 13 5.5v4a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 9.5zM2.5 12a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1z"></svg:path>`,
})
export class FluentLaptop16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
