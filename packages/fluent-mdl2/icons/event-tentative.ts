import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2EventTentativeIcon],svg[fluent-mdl2-event-tentative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2048 128v896h-128V640H128v1152h1408v128H0V128h384V0h128v128h1024V0h128v128zm-128 384V256h-256v128h-128V256H512v128H384V256H128v256zm-256 1408h128v128h-128zm64-768q53 0 99 20t82 55t55 81t20 100q0 46-14 81t-35 63t-47 50t-46 45t-36 45t-14 52v48h-128v-48q0-47 14-81t35-63t47-50t46-45t36-45t14-52q0-27-10-50t-27-40t-41-28t-50-10q-27 0-50 10t-40 27t-28 41t-10 50h-128q0-53 20-99t55-82t81-55t100-20"></svg:path>`,
})
export class FluentMdl2EventTentativeIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
