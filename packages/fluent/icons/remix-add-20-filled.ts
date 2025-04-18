import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentRemixAdd20FilledIcon],svg[fluent-remix-add-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.75 1.999a.75.75 0 0 0 0 1.5H10a6.503 6.503 0 0 1 3.466 12h2.344A8 8 0 0 0 10 2zm5.598 15.83A8.003 8.003 0 0 1 4.19 4.498h2.344A6.5 6.5 0 0 0 3.5 10a6.47 6.47 0 0 0 1.391 4.02A6.49 6.49 0 0 0 10 16.499h7.25a.75.75 0 0 1 0 1.5H10a8 8 0 0 1-1.652-.17M10 7a.75.75 0 0 1 .75.75v1.5h1.5a.75.75 0 0 1 0 1.5h-1.5v1.5a.75.75 0 0 1-1.5 0v-1.5h-1.5a.75.75 0 0 1 0-1.5h1.5v-1.5A.75.75 0 0 1 10 7"></svg:path>`,
})
export class FluentRemixAdd20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
