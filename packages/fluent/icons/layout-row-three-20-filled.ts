import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLayoutRowThree20FilledIcon],svg[fluent-layout-row-three-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 7V6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v1zM3 8v4h14V8zm0 6v-1h14v1a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3"></svg:path>`,
})
export class FluentLayoutRowThree20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
