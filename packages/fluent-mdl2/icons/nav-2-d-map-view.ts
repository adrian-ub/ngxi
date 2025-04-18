import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2Nav2DMapViewIcon],svg[fluent-mdl2-nav-2-d-map-view-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1344 423l704-234v1414l-704 235l-640-213L0 1859V445l704-235zm-576-57v1145l512 171V537zM128 537v1145l512-171V366zm1792 974V366l-512 171v1145z"></svg:path>`,
})
export class FluentMdl2Nav2DMapViewIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
