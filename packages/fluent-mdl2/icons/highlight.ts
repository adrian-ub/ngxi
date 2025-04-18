import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2HighlightIcon],svg[fluent-mdl2-highlight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2048 0v512q-87 0-149 19t-105 55t-70 82t-41 105t-19 120t-5 129q0 66 2 131t3 127h-256v384l-768 384v-768H384q0-62 2-127t3-131q0-66-5-129t-19-120t-40-104t-70-83t-106-54T0 512V0h128v384h1792V0zm-768 1280H768v561l512-256zm256-128q0-45-1-88t-1-86q0-64 5-126t20-120t46-114t82-106H361q51 51 81 106t46 114t21 120t5 126q0 43-1 86t-1 88z"></svg:path>`,
})
export class FluentMdl2HighlightIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
