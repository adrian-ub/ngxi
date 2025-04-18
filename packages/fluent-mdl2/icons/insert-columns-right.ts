import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2InsertColumnsRightIcon],svg[fluent-mdl2-insert-columns-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2048 640l-128-128V256h-512v512H896v384h512v512h512v-256l128-128v512H0V128h2048zM640 1280H128v384h512zm0-512H128v384h512zm0-512H128v384h512zm883 1043l275-275h-774V896h774l-275-275l90-90l429 429l-429 429z"></svg:path>`,
})
export class FluentMdl2InsertColumnsRightIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
