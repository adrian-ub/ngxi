import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentRibbon12FilledIcon],svg[fluent-ribbon-12-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 8a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7m0 1c.729 0 1.412-.195 2-.535V10.5a.5.5 0 0 1-.777.416L6 10.101l-1.223.815A.5.5 0 0 1 4 10.5V8.465C4.588 8.805 5.271 9 6 9"></svg:path>`,
})
export class FluentRibbon12FilledIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
