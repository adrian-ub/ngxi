import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2FieldReadOnlyIcon],svg[fluent-mdl2-field-read-only-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2048 256v865q-20-50-53-92t-75-74V384H128v1152h1024v128H0V256zm-384 768q53 0 99 20t82 55t55 81t20 100v128h128v640h-768v-640h128v-128q0-53 20-99t55-82t81-55t100-20m-128 384h256v-128q0-27-10-50t-27-40t-41-28t-50-10q-27 0-50 10t-40 27t-28 41t-10 50zm384 128h-512v384h512z"></svg:path>`,
})
export class FluentMdl2FieldReadOnlyIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
