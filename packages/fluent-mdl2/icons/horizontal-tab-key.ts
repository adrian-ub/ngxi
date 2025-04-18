import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2HorizontalTabKeyIcon],svg[fluent-mdl2-horizontal-tab-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M475 512h1573v128H475l210 211l-90 90l-365-365l365-365l90 90zM128 256v640H0V256zm1235 941l90-90l365 365l-365 365l-90-90l210-211H0v-128h1573zm557 595v-640h128v640z"></svg:path>`,
})
export class FluentMdl2HorizontalTabKeyIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
