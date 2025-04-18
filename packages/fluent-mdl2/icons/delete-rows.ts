import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2DeleteRowsIcon],svg[fluent-mdl2-delete-rows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 128H0V0h1024v512H896zm515 832l-320 320H0V640h1092zm-515 448h128v512H0v-128h896zm1059-131l-227-227l-227 227l-90-90l227-227l-227-227l91-90l226 226l227-226l90 90l-226 227l227 227z"></svg:path>`,
})
export class FluentMdl2DeleteRowsIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
