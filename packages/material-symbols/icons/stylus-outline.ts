import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStylusOutlineIcon],svg[material-symbols-stylus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.175 21q-.525.125-.913-.262T3 19.825l1-4.775L8.95 20zm4.775-1L4 15.05L15.45 3.6q.575-.575 1.425-.575T18.3 3.6l2.1 2.1q.575.575.575 1.425T20.4 8.55zm7.925-15L6.525 15.35l2.125 2.125L19 7.125z"></svg:path>`,
})
export class MaterialSymbolsStylusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
