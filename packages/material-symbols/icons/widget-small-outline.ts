import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWidgetSmallOutlineIcon],svg[material-symbols-widget-small-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 22v-6h6v6zm7 0v-6h6v6zm7 0v-6h6v6zM2 15V9h6v6zm7 0V9h6v6zm7 0V9h6v6zM2 8V2h6v6zm7 0V2h6v6zm7 0V2h6v6zm-5 10h2zm-5-5v-2zm12 0v-2zm-7-7h2zM4 20h2v-2H4zm7 0h2v-2h-2zm7 0h2v-2h-2zM4 13h2v-2H4zm7 0h2v-2h-2zm7 0h2v-2h-2zm-7-7h2V4h-2zm7 0h2V4h-2z"></svg:path>`,
})
export class MaterialSymbolsWidgetSmallOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
