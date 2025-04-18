import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2ButtonControlIcon],svg[fluent-mdl2-button-control-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 384h2048v1152H0zm1920 1024V512H128v896zm-128-512v128H768V896zM448 1152q-40 0-75-15t-61-41t-41-61t-15-75t15-75t41-61t61-41t75-15t75 15t61 41t41 61t15 75t-15 75t-41 61t-61 41t-75 15m0-256q-26 0-45 19t-19 45t19 45t45 19t45-19t19-45t-19-45t-45-19"></svg:path>`,
})
export class FluentMdl2ButtonControlIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
