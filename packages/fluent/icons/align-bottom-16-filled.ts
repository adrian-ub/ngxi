import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentAlignBottom16FilledIcon],svg[fluent-align-bottom-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.5 14a.5.5 0 0 1 0-1h13a.5.5 0 0 1 0 1zm.5-3.75c0 .966.784 1.75 1.75 1.75h1.5A1.75 1.75 0 0 0 7 10.25v-6.5A1.75 1.75 0 0 0 5.25 2h-1.5A1.75 1.75 0 0 0 2 3.75zm7 0c0 .966.784 1.75 1.75 1.75h1.5A1.75 1.75 0 0 0 14 10.25v-4.5A1.75 1.75 0 0 0 12.25 4h-1.5A1.75 1.75 0 0 0 9 5.75z"></svg:path>`,
})
export class FluentAlignBottom16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
