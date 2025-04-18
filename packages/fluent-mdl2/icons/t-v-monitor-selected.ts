import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2TVMonitorSelectedIcon],svg[fluent-mdl2-t-v-monitor-selected-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1716 1280l-128 128h-564v256H640v-128h256v-128H0V256h1920v820l-128 128V384H128v896zm223 3l90 91l-557 557l-269-269l90-91l179 179z"></svg:path>`,
})
export class FluentMdl2TVMonitorSelectedIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
