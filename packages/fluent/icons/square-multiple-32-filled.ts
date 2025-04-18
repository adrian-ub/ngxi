import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSquareMultiple32FilledIcon],svg[fluent-square-multiple-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.113 5.5h2.097A2.5 2.5 0 0 1 12.502 4h11a4.5 4.5 0 0 1 4.5 4.5v11a2.5 2.5 0 0 1-1.502 2.293v2.096a4.5 4.5 0 0 0 3.502-4.389v-11a6.5 6.5 0 0 0-6.5-6.5h-11a4.5 4.5 0 0 0-4.389 3.5M6.5 7A4.5 4.5 0 0 0 2 11.5v14A4.5 4.5 0 0 0 6.5 30h14a4.5 4.5 0 0 0 4.5-4.5v-14A4.5 4.5 0 0 0 20.5 7z"></svg:path>`,
})
export class FluentSquareMultiple32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
