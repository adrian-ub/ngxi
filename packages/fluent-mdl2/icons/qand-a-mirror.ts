import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2QandAMirrorIcon],svg[fluent-mdl2-qand-a-mirror-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M587 1536h437l128 128H640l-384 384v-384H0V384h128v1152h256v203zM256 0h1664v1408h-384v384l-384-384H256zm1536 1280V128H384v1152h821l203 203v-203zm-768-128v-128h128v128zM832 512q0-53 20-99t55-82t81-55t100-20q53 0 99 20t82 55t55 81t20 100h-128q0-27-10-50t-27-40t-41-28t-50-10q-27 0-50 10t-40 27t-28 41t-10 50q0 29 14 52t35 45t47 44t46 51t36 63t14 81v48h-128v-48q0-29-14-52t-35-45t-47-44t-46-51t-36-62t-14-82"></svg:path>`,
})
export class FluentMdl2QandAMirrorIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
