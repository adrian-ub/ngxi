import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsBrightness4Icon],svg[material-symbols-brightness-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.3 17q2.075 0 3.538-1.463T17.3 12t-1.463-3.537T12.3 7q-.55 0-1.075.113T10.2 7.45q1.35.625 2.138 1.85t.787 2.7t-.788 2.7t-2.137 1.85q.5.225 1.025.338T12.3 17m-.3 6.3L8.65 20H4v-4.65L.7 12L4 8.65V4h4.65L12 .7L15.35 4H20v4.65L23.3 12L20 15.35V20h-4.65z"></svg:path>`,
})
export class MaterialSymbolsBrightness4Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
