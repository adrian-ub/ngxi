import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsAmpStoriesOutlineRoundedIcon],svg[material-symbols-amp-stories-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 20q-.425 0-.712-.288T7 19V5q0-.425.288-.712T8 4h8q.425 0 .713.288T17 5v14q0 .425-.288.713T16 20zm-5-3V6.975q0-.425.288-.7T4 6t.713.288T5 7v10.025q0 .425-.288.7T4 18t-.712-.288T3 17m16 0V6.975q0-.425.288-.7T20 6t.713.288T21 7v10.025q0 .425-.288.7T20 18t-.712-.288T19 17M9 18h6V6H9zm0 0V6z"></svg:path>`,
})
export class MaterialSymbolsAmpStoriesOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
