import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightArrowBack2OutlineRoundedIcon],svg[material-symbols-light-arrow-back-2-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.921 12.677q-.186-.13-.28-.298q-.093-.167-.093-.379t.093-.379t.28-.298l5.843-3.733q.105-.055.214-.083t.214-.028q.323 0 .566.22t.242.588v7.426q0 .368-.242.588t-.566.22q-.106 0-.214-.028q-.109-.027-.215-.083zM14 15.35v-6.7L8.711 12z"></svg:path>`,
})
export class MaterialSymbolsLightArrowBack2OutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
