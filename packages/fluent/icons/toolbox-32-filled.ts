import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentToolbox32FilledIcon],svg[fluent-toolbox-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.25 3A3.25 3.25 0 0 0 9 6.25V8H5.25A3.25 3.25 0 0 0 2 11.25V15h7v-1a1 1 0 1 1 2 0v1h10v-1a1 1 0 1 1 2 0v1h7v-3.75A3.25 3.25 0 0 0 26.75 8H23V6.25A3.25 3.25 0 0 0 19.75 3zM21 8H11V6.25c0-.69.56-1.25 1.25-1.25h7.5c.69 0 1.25.56 1.25 1.25zM2 24.75V17h7v1a1 1 0 1 0 2 0v-1h10v1a1 1 0 1 0 2 0v-1h7v7.75A3.25 3.25 0 0 1 26.75 28H5.25A3.25 3.25 0 0 1 2 24.75"></svg:path>`,
})
export class FluentToolbox32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
