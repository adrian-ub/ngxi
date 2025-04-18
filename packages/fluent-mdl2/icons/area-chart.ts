import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2AreaChartIcon],svg[fluent-mdl2-area-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m256 1792l1664 1v128l-1792-1V129h128zm1664-859v731H384V760l320-160l435 218l333-332zM704 744l-192 95v441h433l540-270l307 307V987l-320-321l-307 308zm-192 792h1280v-37l-333-333l-484 242H512z"></svg:path>`,
})
export class FluentMdl2AreaChartIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
