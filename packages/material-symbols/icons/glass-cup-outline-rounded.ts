import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsGlassCupOutlineRoundedIcon],svg[material-symbols-glass-cup-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.975 22q-.775 0-1.337-.5T5 20.225l-1.75-16q-.1-.875.488-1.55T5.225 2h13.55q.9 0 1.488.675t.487 1.55l-1.75 16q-.075.775-.637 1.275t-1.338.5zm-.2-4L7 20h10l.225-2zm-.2-2H17.45l1.3-12H5.25zm.2 4h10.45z"></svg:path>`,
})
export class MaterialSymbolsGlassCupOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
