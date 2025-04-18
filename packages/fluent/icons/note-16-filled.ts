import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentNote16FilledIcon],svg[fluent-note-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4.5A2.5 2.5 0 0 1 4.5 2h7A2.5 2.5 0 0 1 14 4.5V8h-3.5A2.5 2.5 0 0 0 8 10.5V14H4.5A2.5 2.5 0 0 1 2 11.5zm7 9.359a2.5 2.5 0 0 0 .94-.591l3.328-3.329a2.5 2.5 0 0 0 .59-.939H10.5A1.5 1.5 0 0 0 9 10.5z"></svg:path>`,
})
export class FluentNote16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
