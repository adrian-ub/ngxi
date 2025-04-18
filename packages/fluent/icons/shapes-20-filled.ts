import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentShapes20FilledIcon],svg[fluent-shapes-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 7.5A5.5 5.5 0 0 1 12.978 7H10.5A3.5 3.5 0 0 0 7 10.5v2.478A5.5 5.5 0 0 1 2 7.5m8.5.5A2.5 2.5 0 0 0 8 10.5v5a2.5 2.5 0 0 0 2.5 2.5h5a2.5 2.5 0 0 0 2.5-2.5v-5A2.5 2.5 0 0 0 15.5 8z"></svg:path>`,
})
export class FluentShapes20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
