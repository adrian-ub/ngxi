import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSquareHint20FilledIcon],svg[fluent-square-hint-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.25 3a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5zM3 10.75a.75.75 0 0 0 1.5 0v-1.5a.75.75 0 0 0-1.5 0zm5.5 5.5a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75m7-5.5a.75.75 0 0 0 1.5 0v-1.5a.75.75 0 0 0-1.5 0zm-9.5-7A.75.75 0 0 0 5.25 3A2.25 2.25 0 0 0 3 5.25a.75.75 0 0 0 1.5 0a.75.75 0 0 1 .75-.75a.75.75 0 0 0 .75-.75M5.25 17a.75.75 0 0 0 0-1.5a.75.75 0 0 1-.75-.75a.75.75 0 0 0-1.5 0A2.25 2.25 0 0 0 5.25 17M14 3.75a.75.75 0 0 1 .75-.75A2.25 2.25 0 0 1 17 5.25a.75.75 0 0 1-1.5 0a.75.75 0 0 0-.75-.75a.75.75 0 0 1-.75-.75M14.75 17a.75.75 0 0 1 0-1.5a.75.75 0 0 0 .75-.75a.75.75 0 0 1 1.5 0A2.25 2.25 0 0 1 14.75 17"></svg:path>`,
})
export class FluentSquareHint20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
