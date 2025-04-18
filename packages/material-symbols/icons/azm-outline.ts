import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsAzmOutlineIcon],svg[material-symbols-azm-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 23v-9H1L11 4h9v9zm6-8.825l2-2V6h-6.175l-2 2H16zm-4 4l2-2V10H7.825l-2 2H12z"></svg:path>`,
})
export class MaterialSymbolsAzmOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
