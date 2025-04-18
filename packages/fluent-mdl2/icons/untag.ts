import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2UntagIcon],svg[fluent-mdl2-untag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1600 448q0 27-10 50t-27 40t-41 28t-50 10q-27 0-50-10t-40-27t-28-41t-10-50q0-27 10-50t27-40t41-28t50-10q27 0 50 10t40 27t28 41t10 50M896 1739l263-263l91 90l-354 354L0 1024L1024 0h896v896l-353 353l-91-90l316-316V128h-715l-896 896zm1149-238l-226 227l226 227l-90 90l-227-227l-227 227l-90-90l227-227l-227-227l90-90l227 227l227-227z"></svg:path>`,
})
export class FluentMdl2UntagIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
