import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPower24FilledIcon],svg[fluent-power-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.205 4.843a1 1 0 0 1 .844 1.813A6.997 6.997 0 0 0 12 20a6.998 6.998 0 0 0 2.965-13.337a1 1 0 0 1 .848-1.811A9 9 0 0 1 21 13.003C21 17.972 16.97 22 12 22s-9-4.028-9-8.997a9 9 0 0 1 5.205-8.16M12 2a1 1 0 0 1 .993.883L13 3v7a1 1 0 0 1-1.993.117L11 10V3a1 1 0 0 1 1-1"></svg:path>`,
})
export class FluentPower24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
