import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2EqualizerIcon],svg[fluent-mdl2-equalizer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2048 256v128h-768v64q0 40-15 75t-41 61t-61 41t-75 15t-75-15t-61-41t-41-61t-15-75v-64H0V256h896v-64q0-40 15-75t41-61t61-41t75-15t75 15t61 41t41 61t15 75v64zm-448 1024q40 0 75 15t61 41t41 61t15 75v64h256v128h-256v64q0 40-15 75t-41 61t-61 41t-75 15t-75-15t-61-41t-41-61t-15-75v-64H0v-128h1408v-64q0-40 15-75t41-61t61-41t75-15M448 640q40 0 75 15t61 41t41 61t15 75v64h1408v128H640v64q0 40-15 75t-41 61t-61 41t-75 15t-75-15t-61-41t-41-61t-15-75v-64H0V896h256v-64q0-40 15-75t41-61t61-41t75-15m64 192q0-26-19-45t-45-19t-45 19t-19 45v256q0 26 19 45t45 19t45-19t19-45zm640-640q0-26-19-45t-45-19t-45 19t-19 45v256q0 26 19 45t45 19t45-19t19-45zm512 1280q0-26-19-45t-45-19t-45 19t-19 45v256q0 26 19 45t45 19t45-19t19-45z"></svg:path>`,
})
export class FluentMdl2EqualizerIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
