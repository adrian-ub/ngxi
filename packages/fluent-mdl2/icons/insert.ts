import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2InsertIcon],svg[fluent-mdl2-insert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2048 0v896H640V0zm-128 128H768v640h1152zM640 1152h1408v896H640zm128 768h1152v-640H768zM109 659l366 365l-366 365l-90-90l274-275L19 749z"></svg:path>`,
})
export class FluentMdl2InsertIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
