import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDensitySmallOutlineRoundedIcon],svg[material-symbols-light-density-small-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 21q-.213 0-.356-.144T4 20.499t.144-.356T4.5 20h15q.213 0 .356.144t.144.357t-.144.356T19.5 21zm0-5.673q-.213 0-.356-.144T4 14.826t.144-.356t.356-.143h15q.213 0 .356.144q.144.144.144.357t-.144.356t-.356.143zm0-5.654q-.213 0-.356-.144Q4 9.385 4 9.172t.144-.356t.356-.143h15q.213 0 .356.144t.144.357t-.144.356t-.356.143zM4.5 4q-.213 0-.356-.144T4 3.499t.144-.356T4.5 3h15q.213 0 .356.144t.144.357t-.144.356T19.5 4z"></svg:path>`,
})
export class MaterialSymbolsLightDensitySmallOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
