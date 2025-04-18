import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWandStarsIcon],svg[material-symbols-wand-stars-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.4 21L3 19.6l7.525-7.55L6 10.925l4.95-3.075L10.525 2L15 5.775l5.4-2.2L18.225 9L22 13.45l-5.85-.4l-3.1 4.95l-1.125-4.525zM5 8L3 6l2-2l2 2zm13 13l-2-2l2-2l2 2z"></svg:path>`,
})
export class MaterialSymbolsWandStarsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
