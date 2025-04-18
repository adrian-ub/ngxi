import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentHighway24RegularIcon],svg[fluent-highway-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.49 2.87a.75.75 0 1 0-1.48-.24l-3 18.5a.75.75 0 1 0 1.48.24zm10.5-.24a.75.75 0 1 0-1.48.24l3 18.5a.75.75 0 1 0 1.48-.24zm-5.24.12a.75.75 0 0 0-1.5 0v3.5a.75.75 0 0 0 1.5 0zm-1.5 11a.75.75 0 0 0 1.5 0v-3.5a.75.75 0 0 0-1.5 0zm0 4a.75.75 0 0 1 1.5 0v3.5a.75.75 0 0 1-1.5 0z"></svg:path>`,
})
export class FluentHighway24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
