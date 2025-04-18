import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentNumberCircle816FilledIcon],svg[fluent-number-circle-8-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1m0 4.5c-.594 0-1 .432-1 .875s.406.875 1 .875s1-.432 1-.875S8.594 5.5 8 5.5m1.402 2.213c.512.384.848.976.848 1.662c0 1.208-1.043 2.125-2.25 2.125s-2.25-.917-2.25-2.125c0-.686.336-1.278.848-1.662A1.8 1.8 0 0 1 6 6.375C6 5.299 6.937 4.5 8 4.5s2 .8 2 1.875a1.8 1.8 0 0 1-.598 1.338M8 8.25c-.726 0-1.25.538-1.25 1.125S7.274 10.5 8 10.5s1.25-.538 1.25-1.125S8.726 8.25 8 8.25"></svg:path>`,
})
export class FluentNumberCircle816FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
