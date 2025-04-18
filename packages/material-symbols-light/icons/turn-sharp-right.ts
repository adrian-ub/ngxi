import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTurnSharpRightIcon],svg[material-symbols-light-turn-sharp-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 20v-5.27q0-.67.472-1.142t1.143-.472h7.77q.269 0 .442-.174q.173-.173.173-.442V5.916l-2.1 2.1l-.708-.708L17 4l3.308 3.308l-.708.708l-2.1-2.1V12.5q0 .671-.472 1.143t-1.144.472H8.116q-.27 0-.443.174q-.173.173-.173.442V20z"></svg:path>`,
})
export class MaterialSymbolsLightTurnSharpRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
