import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightGirlIcon],svg[material-symbols-light-girl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.996 7.5q-.567 0-.964-.401t-.397-.968t.4-.965t.969-.397t.964.401q.398.401.398.968t-.401.965t-.969.397m-1.342 11.462v-3.808H8.942l2.049-5.875q.123-.327.394-.514q.271-.188.612-.188q.342 0 .616.188t.397.514l2.048 5.875h-1.712v3.808z"></svg:path>`,
})
export class MaterialSymbolsLightGirlIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
