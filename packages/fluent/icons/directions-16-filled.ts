import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDirections16FilledIcon],svg[fluent-directions-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.732 9.769a2.5 2.5 0 0 1 0-3.536l4.501-4.5a2.5 2.5 0 0 1 3.536 0l4.5 4.5a2.5 2.5 0 0 1 0 3.536l-4.5 4.5a2.5 2.5 0 0 1-3.536 0zm7.122-5.123a.5.5 0 1 0-.708.708L8.793 6H7.5A1.5 1.5 0 0 0 6 7.5V10a.5.5 0 0 0 1 0V7.5a.5.5 0 0 1 .5-.5h1.293l-.647.646a.5.5 0 1 0 .708.708l1.5-1.5a.5.5 0 0 0 0-.708z"></svg:path>`,
})
export class FluentDirections16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
