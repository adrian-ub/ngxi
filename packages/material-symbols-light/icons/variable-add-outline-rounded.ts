import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightVariableAddOutlineRoundedIcon],svg[material-symbols-light-variable-add-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.808 16q-.343 0-.576-.23T4 15.2V8.8q0-.34.232-.57T4.808 8h14.384q.344 0 .576.232t.232.576V9.5q0 .213-.144.356t-.357.144t-.356-.144T19 9.5V9H5v6h8.5q.213 0 .356.144t.144.357t-.144.356T13.5 16zM5 15V9zm14 1h-2.5q-.213 0-.356-.144T16 15.499t.144-.356T16.5 15H19v-2.5q0-.213.144-.356t.357-.144t.356.144t.143.356V15h2.5q.213 0 .356.144t.144.357t-.144.356T22.5 16H20v2.5q0 .213-.144.356t-.357.144t-.356-.144T19 18.5z"></svg:path>`,
})
export class MaterialSymbolsLightVariableAddOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
