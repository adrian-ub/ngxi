import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightHorizontalSplitRoundedIcon],svg[material-symbols-light-horizontal-split-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.808 18q-.343 0-.576-.232T4 17.192v-4.384q0-.344.232-.576T4.808 12h14.384q.344 0 .576.232t.232.576v4.384q0 .343-.232.576t-.576.232zM4.5 10q-.213 0-.356-.144T4 9.499t.144-.356T4.5 9h15q.213 0 .356.144t.144.357t-.144.356T19.5 10zm0-3q-.213 0-.356-.144T4 6.499t.144-.356T4.5 6h15q.213 0 .356.144t.144.357t-.144.356T19.5 7z"></svg:path>`,
})
export class MaterialSymbolsLightHorizontalSplitRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
