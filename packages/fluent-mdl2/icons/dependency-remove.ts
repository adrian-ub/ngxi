import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2DependencyRemoveIcon],svg[fluent-mdl2-dependency-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 512v640h512v128H0V384h1280v512h-128V512zm640 1408v-896h1280v896zm128-768v640h1024v-640zM2048 92l-228 228l228 228l-91 92l-229-229l-228 229l-92-91l229-229l-229-229l92-91l228 229L1957 0z"></svg:path>`,
})
export class FluentMdl2DependencyRemoveIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
