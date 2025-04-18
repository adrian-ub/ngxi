import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightStraightenIcon],svg[material-symbols-light-straighten-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.616 17q-.691 0-1.153-.462T3 15.378V8.622q0-.697.463-1.16T4.615 7H7.5v4.23h1V7h3v4.23h1V7h3v4.23h1V7h2.885q.69 0 1.152.463T21 8.622v6.756q0 .697-.463 1.16T19.385 17z"></svg:path>`,
})
export class MaterialSymbolsLightStraightenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
