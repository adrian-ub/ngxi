import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsBikeDockSharpIcon],svg[material-symbols-bike-dock-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21v-2l4.25-1.225L9 3h6l1.75 14.775L21 19v2zm8-3h2V5h-2z"></svg:path>`,
})
export class MaterialSymbolsBikeDockSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
