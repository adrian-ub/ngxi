import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2TVMonitorIcon],svg[fluent-mdl2-t-v-monitor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1920 1408h-896v128h256v128H640v-128h256v-128H0V256h1920zM128 384v896h1664V384z"></svg:path>`,
})
export class FluentMdl2TVMonitorIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
