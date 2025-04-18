import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentAlignStretchVertical16FilledIcon],svg[fluent-align-stretch-vertical-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.5 13a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1zm0-11a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1zm3 10A1.5 1.5 0 0 1 3 10.5v-5A1.5 1.5 0 0 1 4.5 4h1A1.5 1.5 0 0 1 7 5.5v5A1.5 1.5 0 0 1 5.5 12zM9 10.5a1.5 1.5 0 0 0 1.5 1.5h1a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 11.5 4h-1A1.5 1.5 0 0 0 9 5.5z"></svg:path>`,
})
export class FluentAlignStretchVertical16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
