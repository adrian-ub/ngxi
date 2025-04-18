import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2CombineIcon],svg[fluent-mdl2-combine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2048 896v128h-677l210 211l-90 90l-365-365l365-365l90 90l-210 211zM467 685l90-90l365 365l-365 365l-90-90l210-211H0V896h677z"></svg:path>`,
})
export class FluentMdl2CombineIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
