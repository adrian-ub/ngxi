import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2SkiResortsIcon],svg[fluent-mdl2-ski-resorts-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1472 640l574 1152H0L768 256l447 897zm0 287l-185 369l47 95l111-111h203zM898 803L768 543L638 803l130 130zm-691 861h1121L958 924l-190 191l-191-191zm1263 0h369l-127-256h-213l-104 104z"></svg:path>`,
})
export class FluentMdl2SkiResortsIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
