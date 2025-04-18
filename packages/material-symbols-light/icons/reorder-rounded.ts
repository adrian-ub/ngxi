import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightReorderRoundedIcon],svg[material-symbols-light-reorder-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 18q-.213 0-.356-.144T4 17.499t.144-.356T4.5 17h15q.213 0 .356.144t.144.357t-.144.356T19.5 18zm0-3.673q-.213 0-.356-.144T4 13.826t.144-.356t.356-.143h15q.213 0 .356.144q.144.144.144.357t-.144.356t-.356.143zm0-3.654q-.213 0-.356-.144Q4 10.385 4 10.172t.144-.356t.356-.143h15q.213 0 .356.144t.144.357t-.144.356t-.356.143zM4.5 7q-.213 0-.356-.144T4 6.499t.144-.356T4.5 6h15q.213 0 .356.144t.144.357t-.144.356T19.5 7z"></svg:path>`,
})
export class MaterialSymbolsLightReorderRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
