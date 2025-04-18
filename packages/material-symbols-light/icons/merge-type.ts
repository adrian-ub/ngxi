import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightMergeTypeIcon],svg[material-symbols-light-merge-type-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.985 19L11.5 13.516V5.952l-3.1 3.1l-.713-.713L12 4.025l4.308 4.308l-.714.713L12.5 5.952V13.1l5.192 5.192zm-9.97.006l-.707-.708l3.579-3.585l.713.714z"></svg:path>`,
})
export class MaterialSymbolsLightMergeTypeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
