import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2NewMailIcon],svg[fluent-mdl2-new-mail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1792 1280v256h256v128h-256v256h-128v-256h-256v-128h256v-256zM0 384h2048v896h-128V648l-896 447l-896-447v888h1024v128H0zm143 128l881 441l881-441z"></svg:path>`,
})
export class FluentMdl2NewMailIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
