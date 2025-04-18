import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFlagOff32LightIcon],svg[fluent-flag-off-32-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.854 2.146a.5.5 0 1 0-.708.708L5 5.707V28.5a.5.5 0 0 0 1 0V21h14.293l8.853 8.854a.5.5 0 0 0 .708-.708zM19.293 20H6V6.707zm9.207 1h-5.732l-1-1h5.72l-5.885-7.696a.5.5 0 0 1 0-.608L27.488 4H6.5a.5.5 0 0 0-.45.282l-.72-.72A1.5 1.5 0 0 1 6.5 3h22a.5.5 0 0 1 .397.804L22.63 12l6.268 8.196A.5.5 0 0 1 28.5 21"></svg:path>`,
})
export class FluentFlagOff32LightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
