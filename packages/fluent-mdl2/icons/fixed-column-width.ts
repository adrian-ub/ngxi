import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2FixedColumnWidthIcon],svg[fluent-mdl2-fixed-column-width-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1920 0h128v768H0V0h128v640h256V384h128v256h256V128h128v512h256V384h128v256h256V128h128v512h256zM0 2048V896h2048v1152h-128v-128h-512v128h-128v-128H768v128H640v-128H128v128zm768-256h512v-384H768zm640 0h512v-384h-512zM128 1024v256h1792v-256zm512 384H128v384h512z"></svg:path>`,
})
export class FluentMdl2FixedColumnWidthIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
