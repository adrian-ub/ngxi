import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentHighway24FilledIcon],svg[fluent-highway-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.987 3.164a1 1 0 1 0-1.973-.328l-3 18a1 1 0 1 0 1.973.328zm10-.328a1 1 0 0 0-1.973.328l3 18a1 1 0 1 0 1.973-.328zM13 3a1 1 0 0 0-2 0v3a1 1 0 1 0 2 0zm-2 10.5a1 1 0 1 0 2 0v-3a1 1 0 0 0-2 0zm0 4.5a1 1 0 1 1 2 0v3a1 1 0 0 1-2 0z"></svg:path>`,
})
export class FluentHighway24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
