import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLineStartRoundedIcon],svg[material-symbols-light-line-start-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 14q-.84 0-1.42-.58t-.58-1.419t.58-1.42T4.5 10q.698 0 1.237.425t.698 1.075H21q.213 0 .356.144t.144.357t-.144.356T21 12.5H6.435q-.16.65-.698 1.075T4.5 14"></svg:path>`,
})
export class MaterialSymbolsLightLineStartRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
