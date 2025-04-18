import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentShoppingBag48FilledIcon],svg[fluent-shopping-bag-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 10a6 6 0 0 1 10-4.472A6 6 0 0 1 34 10v4h3.5a2.5 2.5 0 0 1 2.5 2.5v22.25a5.25 5.25 0 1 1-10.5 0V14h2v-4a3.5 3.5 0 0 0-6.014-2.434A6 6 0 0 1 26 10v4h1v24.75c0 2.025.777 3.87 2.05 5.25H14.5A6.5 6.5 0 0 1 8 37.5v-21a2.5 2.5 0 0 1 2.5-2.5H14zm2.5 4h7v-4a3.5 3.5 0 1 0-7 0z"></svg:path>`,
})
export class FluentShoppingBag48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
