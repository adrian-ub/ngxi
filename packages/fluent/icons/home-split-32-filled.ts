import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentHomeSplit32FilledIcon],svg[fluent-home-split-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.108 2.776a3.25 3.25 0 0 0-4.216 0l-9.75 8.31A3.25 3.25 0 0 0 3 13.559V26.5A2.5 2.5 0 0 0 5.5 29h21a2.5 2.5 0 0 0 2.5-2.5V13.56a3.25 3.25 0 0 0-1.142-2.473zM17 8v2a1 1 0 1 1-2 0V8a1 1 0 1 1 2 0m-1 6a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1m1 8v2a1 1 0 1 1-2 0v-2a1 1 0 1 1 2 0"></svg:path>`,
})
export class FluentHomeSplit32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
