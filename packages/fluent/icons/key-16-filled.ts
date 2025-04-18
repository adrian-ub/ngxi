import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentKey16FilledIcon],svg[fluent-key-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 11.5v.5a.5.5 0 0 1-.5.5H6v.5a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1.293A1 1 0 0 1 2.293 11l3.87-3.87A4 4 0 1 1 10 10H8.999v1a.5.5 0 0 1-.5.5zM11 6a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class FluentKey16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
