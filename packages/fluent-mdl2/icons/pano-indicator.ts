import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2PanoIndicatorIcon],svg[fluent-mdl2-pano-indicator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1472 896q-26 0-45-19t-19-45t19-45t45-19t45 19t19 45t-19 45t-45 19M0 279q241 115 499 172t525 58q266 0 524-57t500-173v1488q-241-115-499-173t-525-58q-266 0-524 58T0 1767zm128 1298q153-59 311-96t321-54l-312-312l-320 319zm802-161q24-1 48-1t49-1q197 0 391 30l-330-329l-229 229zm990 18l-192-191l-166 165l83 83q70 18 138 39t137 47zm0-965q-215 83-440 127t-456 44t-456-44t-440-127v785l320-321l320 321l320-321l384 384l256-256l192 193z"></svg:path>`,
})
export class FluentMdl2PanoIndicatorIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
