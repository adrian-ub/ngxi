import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLineStartArrowOutlineRoundedIcon],svg[material-symbols-light-line-start-arrow-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.571 16.044l-5.284-3.367q-.38-.238-.38-.675t.38-.679l5.284-3.367q.404-.268.82-.032q.417.236.417.728V11.5h8.615q.213 0 .356.144t.144.357t-.144.356t-.356.143h-8.615v2.848q0 .492-.417.728q-.416.235-.82-.032m.237-1.04V8.996L6.09 12zm0-3.004"></svg:path>`,
})
export class MaterialSymbolsLightLineStartArrowOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
