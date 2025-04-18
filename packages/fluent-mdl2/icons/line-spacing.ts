import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2LineSpacingIcon],svg[fluent-mdl2-line-spacing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m448 102l365 365l-90 90l-211-210v549H384V347L173 557l-90-90zm275 1389l90 90l-365 365l-365-365l90-90l211 210v-549h128v549zM2048 384v128H1024V384zM1024 768h1024v128H1024zm0 384h1024v128H1024zm0 384h1024v128H1024z"></svg:path>`,
})
export class FluentMdl2LineSpacingIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
