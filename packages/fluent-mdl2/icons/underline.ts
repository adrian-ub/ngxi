import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2UnderlineIcon],svg[fluent-mdl2-underline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1011 1792q-161 0-274-46t-184-133t-105-209t-33-275V128h192v988q0 109 21 201t71 159t131 106t201 38q115 0 193-36t127-101t69-154t21-195V128h192v975q0 158-34 285t-109 217t-193 138t-286 49m-627 128h1280v128H384z"></svg:path>`,
})
export class FluentMdl2UnderlineIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
