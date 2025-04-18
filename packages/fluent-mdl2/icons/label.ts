import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2LabelIcon],svg[fluent-mdl2-label-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1720 128q41 0 77 16t63 43t43 63t16 78q0 37-10 65t-29 53t-41 46t-47 46v1254H256V256h1254q24-24 46-47t47-41t52-29t65-11m0 128q-29 0-50 21l-948 948l-34 135l135-34l948-948q21-21 21-50q0-30-21-51t-51-21m-56 410l-775 776l-377 94l94-377l776-775H384v1280h1280z"></svg:path>`,
})
export class FluentMdl2LabelIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
