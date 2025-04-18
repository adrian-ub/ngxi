import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDataBarVertical32FilledIcon],svg[fluent-data-bar-vertical-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 7a3 3 0 1 1 6 0v18a3 3 0 1 1-6 0zm8 6a3 3 0 1 1 6 0v12a3 3 0 1 1-6 0zm11 3a3 3 0 0 0-3 3v6a3 3 0 1 0 6 0v-6a3 3 0 0 0-3-3"></svg:path>`,
})
export class FluentDataBarVertical32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
