import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2DependencyAddIcon],svg[fluent-mdl2-dependency-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 512v640h512v128H0V384h1280v512h-128V512zm640 1408v-896h1280v896zm128-768v640h1024v-640zm384-1023V0h257q51 0 98 19t84 56q36 36 55 83t20 99v294l164-162l90 90l-318 318l-319-318l91-90l164 162V257q0-27-10-50t-27-41t-41-27t-51-10z"></svg:path>`,
})
export class FluentMdl2DependencyAddIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
