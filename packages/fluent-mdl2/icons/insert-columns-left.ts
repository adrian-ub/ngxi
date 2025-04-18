import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2InsertColumnsLeftIcon],svg[fluent-mdl2-insert-columns-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2048 128v1664H0v-512l128 128v256h512v-512h512V768H640V256H128v256L0 640V128zm-128 1152h-512v384h512zm0-512h-512v384h512zm0-512h-512v384h512zM525 621L250 896h774v128H250l275 275l-90 90L6 960l429-429z"></svg:path>`,
})
export class FluentMdl2InsertColumnsLeftIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
