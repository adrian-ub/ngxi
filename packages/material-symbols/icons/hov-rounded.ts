import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHovRoundedIcon],svg[material-symbols-hov-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21.05q-.25 0-.475-.112t-.375-.363l-4.525-7.55q-.15-.25-.225-.5T6.325 12t.075-.525t.225-.5l4.525-7.55q.15-.25.375-.363T12 2.95t.475.112t.375.363l4.525 7.55q.15.25.225.5t.075.525t-.075.525t-.225.5l-4.525 7.55q-.15.25-.375.363T12 21.05"></svg:path>`,
})
export class MaterialSymbolsHovRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
