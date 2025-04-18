import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSpacebar20FilledIcon],svg[fluent-spacebar-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.75 7.75a.75.75 0 0 1 .75.75v2h13v-2a.75.75 0 0 1 1.5 0v2a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 2 10.5v-2a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class FluentSpacebar20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
