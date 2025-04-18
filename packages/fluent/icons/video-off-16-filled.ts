import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentVideoOff16FilledIcon],svg[fluent-video-off-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.992 10.7l4.154 4.154a.5.5 0 0 0 .708-.708l-13-13a.5.5 0 1 0-.708.708l1.355 1.354A2.5 2.5 0 0 0 1 5.5v5A2.5 2.5 0 0 0 3.5 13h4a2.5 2.5 0 0 0 2.492-2.3m.928-1.902l3.157 3.158c.508-.142.919-.6.919-1.206V5.252a1.25 1.25 0 0 0-1.96-1.028L10.9 5.698q.02.139.02.282zM5.12 3L10 7.879V5.5A2.5 2.5 0 0 0 7.5 3z"></svg:path>`,
})
export class FluentVideoOff16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
