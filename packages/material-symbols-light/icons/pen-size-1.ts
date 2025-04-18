import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPenSize1Icon],svg[material-symbols-light-pen-size-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.187 18.814q-.13-.13-.13-.31t.13-.317l13-13q.136-.13.317-.13t.31.13q.128.129.128.31t-.128.317l-13 13q-.136.128-.317.128t-.31-.128"></svg:path>`,
})
export class MaterialSymbolsLightPenSize1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
