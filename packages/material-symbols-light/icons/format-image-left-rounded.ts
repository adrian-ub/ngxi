import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFormatImageLeftRoundedIcon],svg[material-symbols-light-format-image-left-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.808 16.25q-.343 0-.576-.232T4 15.442V8.558q0-.343.232-.576t.576-.232h6.884q.343 0 .576.232t.232.576v6.884q0 .344-.232.576t-.576.232zm.192-1h6.5v-6.5H5zM4.5 5q-.213 0-.356-.144T4 4.499t.144-.356T4.5 4h15q.213 0 .356.144t.144.357t-.144.356T19.5 5zm10.885 3.75q-.213 0-.357-.144t-.143-.357t.143-.356t.357-.143H19.5q.213 0 .356.144t.144.357t-.144.356t-.356.143zm0 3.75q-.213 0-.357-.144t-.143-.357t.143-.356t.357-.143H19.5q.213 0 .356.144t.144.357t-.144.356t-.356.143zm0 3.75q-.213 0-.357-.144t-.143-.357t.143-.356t.357-.143H19.5q.213 0 .356.144t.144.357t-.144.356t-.356.143zM4.5 20q-.213 0-.356-.144T4 19.499t.144-.356T4.5 19h15q.213 0 .356.144t.144.357t-.144.356T19.5 20z"></svg:path>`,
})
export class MaterialSymbolsLightFormatImageLeftRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
