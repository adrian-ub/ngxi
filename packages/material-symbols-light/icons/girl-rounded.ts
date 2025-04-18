import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightGirlRoundedIcon],svg[material-symbols-light-girl-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.996 7.5q-.567 0-.964-.401t-.397-.968t.4-.965t.969-.397t.964.401q.398.401.398.968t-.401.965t-.969.397m-1.342 10.654v-3h-.57q-.428 0-.664-.348t-.093-.733l1.664-4.794q.123-.327.394-.514q.271-.188.612-.188q.342 0 .616.188t.397.514l1.663 4.794q.143.385-.093.733t-.664.348h-.57v3q0 .343-.232.575t-.575.233h-1.077q-.344 0-.576-.233t-.232-.575"></svg:path>`,
})
export class MaterialSymbolsLightGirlRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
