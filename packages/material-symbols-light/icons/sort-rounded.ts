import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSortRoundedIcon],svg[material-symbols-light-sort-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 17q-.213 0-.356-.144T4 16.499t.144-.356T4.5 16h3.75q.213 0 .356.144t.144.357t-.144.356T8.25 17zm0-4.5q-.213 0-.356-.144T4 11.999t.144-.356t.356-.143h9.366q.212 0 .356.144t.144.357t-.144.356t-.356.143zm0-4.5q-.213 0-.356-.144T4 7.499t.144-.356T4.5 7h15q.213 0 .356.144t.144.357t-.144.356T19.5 8z"></svg:path>`,
})
export class MaterialSymbolsLightSortRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
