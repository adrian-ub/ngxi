import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLaptopMultiple24FilledIcon],svg[fluent-laptop-multiple-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.627 5h10.622a2.75 2.75 0 0 1 2.75 2.75v6.622a2.25 2.25 0 0 0 1.5-2.122v-4.5a4.25 4.25 0 0 0-4.25-4.25h-8.5A2.25 2.25 0 0 0 6.627 5M6.25 6A2.25 2.25 0 0 0 4 8.25v6.5A2.25 2.25 0 0 0 6.25 17h10.5A2.25 2.25 0 0 0 19 14.75v-6.5A2.25 2.25 0 0 0 16.75 6zm-3.5 12.5a.75.75 0 0 0 0 1.5h17.5a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class FluentLaptopMultiple24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
