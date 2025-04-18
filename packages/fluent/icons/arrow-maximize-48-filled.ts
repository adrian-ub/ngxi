import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowMaximize48FilledIcon],svg[fluent-arrow-maximize-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M40.5 24a1.5 1.5 0 0 1-1.5-1.5V11.121L11.121 39H22.5a1.5 1.5 0 0 1 0 3h-15A1.5 1.5 0 0 1 6 40.5v-15a1.5 1.5 0 0 1 3 0v11.379L36.879 9H25.5a1.5 1.5 0 0 1 0-3h15A1.5 1.5 0 0 1 42 7.5v15a1.5 1.5 0 0 1-1.5 1.5"></svg:path>`,
})
export class FluentArrowMaximize48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
