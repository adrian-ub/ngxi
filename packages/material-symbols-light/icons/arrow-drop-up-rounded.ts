import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightArrowDropUpRoundedIcon],svg[material-symbols-light-arrow-drop-up-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.162 13.5q-.182 0-.293-.124t-.111-.288q0-.042.13-.284l2.678-2.677q.092-.093.199-.143t.235-.05t.235.05t.2.143l2.677 2.677q.055.056.093.129q.037.073.037.157q0 .168-.11.289q-.112.121-.293.121z"></svg:path>`,
})
export class MaterialSymbolsLightArrowDropUpRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
