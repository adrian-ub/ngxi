import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2TagUnknownMirrorIcon],svg[fluent-mdl2-tag-unknown-mirror-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1600 448q0 27-10 50t-27 40t-41 28t-50 10q-27 0-50-10t-40-27t-28-41t-10-50q0-27 10-50t27-40t41-28t50-10q27 0 50 10t40 27t28 41t10 50M181 1024l715 715l384-384v181l-384 384L0 1024L1024 0h896v896l-105 105q-44-9-87-9q-25 0-49 3t-49 10l162-162V128h-715zm1483 1024v-128h128v128zm64-896q53 0 99 20t82 55t55 81t20 100h-128q0-27-10-50t-27-40t-41-28t-50-10q-27 0-50 10t-40 27t-28 41t-10 50q0 29 14 52t35 45t47 44t46 51t36 63t14 81v48h-128v-48q0-29-14-52t-35-45t-47-44t-46-51t-36-62t-14-82q0-53 20-99t55-82t81-55t100-20"></svg:path>`,
})
export class FluentMdl2TagUnknownMirrorIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
