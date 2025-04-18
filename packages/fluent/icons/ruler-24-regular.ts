import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentRuler24RegularIcon],svg[fluent-ruler-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.25 2A2.25 2.25 0 0 0 7 4.25v15.5A2.25 2.25 0 0 0 9.25 22h5.5A2.25 2.25 0 0 0 17 19.75V4.25A2.25 2.25 0 0 0 14.75 2zM8.5 19h1.75a.75.75 0 0 0 0-1.5H8.5V16h3.75a.75.75 0 0 0 0-1.5H8.5v-1.75h1.75a.75.75 0 0 0 0-1.5H8.5V9.5h3.75a.75.75 0 0 0 0-1.5H8.5V6.5h1.75a.75.75 0 0 0 0-1.5H8.5v-.75a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 .75.75v15.5a.75.75 0 0 1-.75.75h-5.5a.75.75 0 0 1-.75-.75z"></svg:path>`,
})
export class FluentRuler24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
