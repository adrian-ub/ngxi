import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightArrowBack2RoundedIcon],svg[material-symbols-light-arrow-back-2-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.921 12.677q-.186-.13-.28-.298q-.093-.167-.093-.379t.093-.379t.28-.298l5.843-3.733q.101-.055.213-.083t.213-.028q.326 0 .568.22t.242.588v7.426q0 .368-.243.588q-.244.22-.569.22q-.101 0-.212-.028q-.111-.027-.212-.083z"></svg:path>`,
})
export class MaterialSymbolsLightArrowBack2RoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
