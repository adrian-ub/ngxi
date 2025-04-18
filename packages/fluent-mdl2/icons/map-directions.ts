import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2MapDirectionsIcon],svg[fluent-mdl2-map-directions-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1024 0l1024 1024l-1024 1024L0 1024zM768 1611l256 256l843-843l-843-843l-843 843l459 459V896h549L979 685l90-90l365 365l-365 365l-90-90l210-211H768z"></svg:path>`,
})
export class FluentMdl2MapDirectionsIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
