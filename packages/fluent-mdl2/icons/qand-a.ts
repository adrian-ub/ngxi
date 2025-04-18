import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2QandAIcon],svg[fluent-mdl2-qand-a-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1792 384h128v1280h-256v384l-384-384H768l128-128h437l203 203v-203h256zM768 1408l-384 384v-384H0V0h1664v1408zm-640-128h384v203l203-203h821V128H128zm640-128v-128h128v128zm64-768q-27 0-50 10t-40 27t-28 41t-10 50H576q0-53 20-99t55-82t81-55t100-20q53 0 99 20t82 55t55 81t20 100q0 46-14 81t-37 65t-52 57t-59 58q-20 20-25 42t-6 47v16q0 8 1 18H768v-48q0-46 14-81t35-63t47-50t46-45t36-45t14-52q0-27-10-50t-27-40t-41-28t-50-10"></svg:path>`,
})
export class FluentMdl2QandAIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
