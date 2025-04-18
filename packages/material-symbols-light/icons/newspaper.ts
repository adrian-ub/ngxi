import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightNewspaperIcon],svg[material-symbols-light-newspaper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.116 20.5q-.667 0-1.141-.475t-.475-1.14V4.211l1.175 1.175l1.65-1.675L7 5.387l1.675-1.675l1.65 1.675L12 3.712l1.675 1.675l1.65-1.675L17 5.387l1.675-1.675l1.65 1.675L21.5 4.212v14.673q0 .666-.474 1.14t-1.141.475zm0-1H11.5v-7h-8v6.385q0 .269.173.442t.443.173m8.384 0h7.385q.269 0 .442-.173t.173-.442V16.5h-8zm0-4h8v-3h-8zm-9-4h17V7.308h-17z"></svg:path>`,
})
export class MaterialSymbolsLightNewspaperIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
