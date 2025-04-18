import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentAttach32LightIcon],svg[fluent-attach-32-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.077 4.217l-14.93 14.93a.5.5 0 0 0 .707.708l14.93-14.93a6.57 6.57 0 1 1 9.292 9.292L13.287 28.006a3.39 3.39 0 1 1-4.793-4.793l11.86-11.86a.5.5 0 0 0-.708-.707L7.787 22.506a4.39 4.39 0 0 0 6.207 6.207l13.79-13.788A7.57 7.57 0 1 0 17.076 4.217"></svg:path>`,
})
export class FluentAttach32LightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
