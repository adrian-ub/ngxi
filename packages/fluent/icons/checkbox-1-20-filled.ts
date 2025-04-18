import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCheckbox120FilledIcon],svg[fluent-checkbox-1-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 2-.764v-.821a1.5 1.5 0 0 1-1.4-2.615l2-1.5q.187-.14.4-.214V6a3 3 0 0 0-3-3zm7.854 4.854l-5 5a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L8.5 11.793l4.646-4.647a.5.5 0 0 1 .708.708m3.87 4.199A.5.5 0 0 1 18 12.5v5a.5.5 0 0 1-1 0v-4l-1.2.9a.5.5 0 0 1-.6-.8l2-1.5a.5.5 0 0 1 .524-.047"></svg:path>`,
})
export class FluentCheckbox120FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
