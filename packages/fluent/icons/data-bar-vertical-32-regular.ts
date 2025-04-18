import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDataBarVertical32RegularIcon],svg[fluent-data-bar-vertical-32-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 7a3 3 0 1 1 6 0v18a3 3 0 1 1-6 0zm3-1a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V7a1 1 0 0 0-1-1m5 7a3 3 0 1 1 6 0v12a3 3 0 1 1-6 0zm3-1a1 1 0 0 0-1 1v12a1 1 0 1 0 2 0V13a1 1 0 0 0-1-1m8 4a3 3 0 0 0-3 3v6a3 3 0 1 0 6 0v-6a3 3 0 0 0-3-3m-1 3a1 1 0 1 1 2 0v6a1 1 0 1 1-2 0z"></svg:path>`,
})
export class FluentDataBarVertical32RegularIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
