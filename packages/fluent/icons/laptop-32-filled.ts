import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLaptop32FilledIcon],svg[fluent-laptop-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 9.25A3.25 3.25 0 0 1 7.25 6h17.5A3.25 3.25 0 0 1 28 9.25v9.5A3.25 3.25 0 0 1 24.75 22H7.25A3.25 3.25 0 0 1 4 18.75zM3 24a1 1 0 1 0 0 2h26a1 1 0 1 0 0-2z"></svg:path>`,
})
export class FluentLaptop32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
