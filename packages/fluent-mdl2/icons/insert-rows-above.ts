import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2InsertRowsAboveIcon],svg[fluent-mdl2-insert-rows-above-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2048 128v1664H0V128h512L384 256H128v384h640v512h384V640h768V256h-384l-128-128zM640 1280H128v384h512zm640 0H768v384h512zm640 0h-512v384h512zM621 525l-90-90L960 6l429 429l-90 90l-275-275v774H896V250z"></svg:path>`,
})
export class FluentMdl2InsertRowsAboveIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
