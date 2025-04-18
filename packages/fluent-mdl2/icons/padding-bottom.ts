import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2PaddingBottomIcon],svg[fluent-mdl2-padding-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 128h1920V0H0zm128 1792H0v128h128zm1792 128v-128h-128v128zM512 1920H256v128h256zm384 0H640v128h256zm384 0h-256v128h256zm384 0h-256v128h256zm-979-685l-90 90l365 365l365-365l-90-90l-211 210V384H896v1061z"></svg:path>`,
})
export class FluentMdl2PaddingBottomIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
