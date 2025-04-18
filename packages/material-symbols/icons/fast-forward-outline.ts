import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFastForwardOutlineIcon],svg[material-symbols-fast-forward-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 18V6l9 6zm10 0V6l9 6zm-8-3.75L7.9 12L4.5 9.75zm10 0L17.9 12l-3.4-2.25z"></svg:path>`,
})
export class MaterialSymbolsFastForwardOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
