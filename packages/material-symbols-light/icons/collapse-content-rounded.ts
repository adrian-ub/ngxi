import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCollapseContentRoundedIcon],svg[material-symbols-light-collapse-content-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 14H6.5q-.213 0-.356-.144T6 13.499t.144-.356T6.5 13h3.692q.343 0 .576.232t.232.576V17.5q0 .213-.144.356t-.357.144t-.356-.144T10 17.5zm4-4h3.5q.213 0 .356.144t.144.357t-.144.356T17.5 11h-3.692q-.344 0-.576-.232T13 10.192V6.5q0-.213.144-.356T13.501 6t.356.144T14 6.5z"></svg:path>`,
})
export class MaterialSymbolsLightCollapseContentRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
