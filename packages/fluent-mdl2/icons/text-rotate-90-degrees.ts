import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2TextRotate90DegreesIcon],svg[fluent-mdl2-text-rotate-90-degrees-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 128h2048v1664H0zm1920 1536V256H128v1408zM896 755L256 995V892l128-48V564l-128-48V413l640 240zm-384 41l247-92l-247-92zm1277 417l-317 317l-317-317l90-90l163 163V384h128v902l163-163z"></svg:path>`,
})
export class FluentMdl2TextRotate90DegreesIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
