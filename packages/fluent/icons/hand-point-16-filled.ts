import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentHandPoint16FilledIcon],svg[fluent-hand-point-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 .998A2 2 0 0 0 5.996 3v4.204l-.626-.277a3.51 3.51 0 0 0-4.185 1.045a.88.88 0 0 0 .343 1.347c2 .877 3.206 1.604 3.985 2.268c.765.65 1.134 1.252 1.44 1.918c.456.993 1.483 1.62 2.6 1.47l2.07-.28a2.5 2.5 0 0 0 2.092-1.873l.681-2.733a3.5 3.5 0 0 0-2.86-4.305L10 5.546V3A2 2 0 0 0 8 .998"></svg:path>`,
})
export class FluentHandPoint16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
