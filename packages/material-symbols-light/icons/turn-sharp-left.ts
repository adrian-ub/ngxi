import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTurnSharpLeftIcon],svg[material-symbols-light-turn-sharp-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 20v-5.27q0-.268-.173-.441t-.442-.173h-7.77q-.67 0-1.143-.473Q6.5 13.171 6.5 12.5V5.916l-2.1 2.1l-.708-.708L7 4l3.308 3.308l-.708.708l-2.1-2.1V12.5q0 .27.173.442q.173.173.443.173h7.769q.67 0 1.143.472q.472.473.472 1.144V20z"></svg:path>`,
})
export class MaterialSymbolsLightTurnSharpLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
