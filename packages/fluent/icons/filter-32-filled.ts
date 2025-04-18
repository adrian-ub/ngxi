import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFilter32FilledIcon],svg[fluent-filter-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 9.25C3 8.56 3.56 8 4.25 8h23.5a1.25 1.25 0 1 1 0 2.5H4.25C3.56 10.5 3 9.94 3 9.25m4 7c0-.69.56-1.25 1.25-1.25h15.5a1.25 1.25 0 1 1 0 2.5H8.25c-.69 0-1.25-.56-1.25-1.25M12.25 22a1.25 1.25 0 1 0 0 2.5h7.5a1.25 1.25 0 1 0 0-2.5z"></svg:path>`,
})
export class FluentFilter32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
