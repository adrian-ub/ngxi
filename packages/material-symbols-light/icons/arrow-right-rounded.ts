import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightArrowRightRoundedIcon],svg[material-symbols-light-arrow-right-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.91 15.242q-.168 0-.289-.11q-.121-.112-.121-.293V9.162q0-.182.124-.293t.288-.111q.042 0 .284.13l2.677 2.678q.093.092.143.199t.05.235t-.05.235t-.143.2l-2.677 2.677q-.055.055-.129.093q-.073.037-.157.037"></svg:path>`,
})
export class MaterialSymbolsLightArrowRightRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
