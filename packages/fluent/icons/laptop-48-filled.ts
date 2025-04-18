import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLaptop48FilledIcon],svg[fluent-laptop-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 12.25A4.25 4.25 0 0 1 12.25 8h23.5A4.25 4.25 0 0 1 40 12.25v15.5A4.25 4.25 0 0 1 35.75 32h-23.5A4.25 4.25 0 0 1 8 27.75zM5.25 35.5a1.25 1.25 0 1 0 0 2.5h37.5a1.25 1.25 0 1 0 0-2.5z"></svg:path>`,
})
export class FluentLaptop48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
