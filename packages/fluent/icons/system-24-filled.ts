import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSystem24FilledIcon],svg[fluent-system-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.946 5h14.108C20.678 5 22 6.304 22 7.92v8.16c0 1.616-1.322 2.92-2.946 2.92H4.946C3.322 19 2 17.696 2 16.08V7.92C2 6.304 3.322 5 4.946 5m0 2A.933.933 0 0 0 4 7.92v8.16c0 .505.42.92.946.92h14.108a.933.933 0 0 0 .946-.92V7.92c0-.505-.42-.92-.946-.92z"></svg:path>`,
})
export class FluentSystem24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
