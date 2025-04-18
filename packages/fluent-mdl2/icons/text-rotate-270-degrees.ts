import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2TextRotate270DegreesIcon],svg[fluent-mdl2-text-rotate-270-degrees-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 128h2048v1664H0zm1920 1536V256H128v1408zM896 1507l-640-240v-102l640-240v103l-128 48v280l128 48zm-256-383l-247 92l247 92zm768-496l-163 163l-90-90l317-317l317 317l-90 90l-163-163v902h-128z"></svg:path>`,
})
export class FluentMdl2TextRotate270DegreesIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
