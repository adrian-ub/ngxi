import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightExpandContentRoundedIcon],svg[material-symbols-light-expand-content-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 17h3.5q.213 0 .356.144t.144.357t-.144.356T10.5 18H6.808q-.343 0-.576-.232T6 17.192V13.5q0-.213.144-.356T6.501 13t.356.144T7 13.5zM17 7h-3.5q-.213 0-.356-.144T13 6.499t.144-.356T13.5 6h3.692q.344 0 .576.232t.232.576V10.5q0 .213-.144.356t-.357.144t-.356-.144T17 10.5z"></svg:path>`,
})
export class MaterialSymbolsLightExpandContentRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
