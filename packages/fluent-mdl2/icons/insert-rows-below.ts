import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2InsertRowsBelowIcon],svg[fluent-mdl2-insert-rows-below-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2048 128v1664h-640l128-128h384v-384h-768V768H768v512H128v384h256l128 128H0V128zM640 256H128v384h512zm640 0H768v384h512zm640 0h-512v384h512zm-621 1139l90 90l-429 429l-429-429l90-90l275 275V896h128v774z"></svg:path>`,
})
export class FluentMdl2InsertRowsBelowIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
