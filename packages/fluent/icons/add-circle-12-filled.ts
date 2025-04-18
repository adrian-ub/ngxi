import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentAddCircle12FilledIcon],svg[fluent-add-circle-12-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 6a5 5 0 1 1 10 0A5 5 0 0 1 1 6m5-2.5a.417.417 0 0 0-.417.417v1.666H3.917a.417.417 0 0 0 0 .834h1.666v1.666a.417.417 0 0 0 .834 0V6.417h1.666a.417.417 0 0 0 0-.834H6.417V3.917A.417.417 0 0 0 6 3.5"></svg:path>`,
})
export class FluentAddCircle12FilledIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
