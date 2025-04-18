import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsBackgroundDotLargeSharpIcon],svg[material-symbols-background-dot-large-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 17q.625 0 1.063-.437T10 15.5t-.437-1.062T8.5 14t-1.062.438T7 15.5t.438 1.063T8.5 17m0-7q.625 0 1.063-.437T10 8.5t-.437-1.062T8.5 7t-1.062.438T7 8.5t.438 1.063T8.5 10m7 7q.625 0 1.063-.437T17 15.5t-.437-1.062T15.5 14t-1.062.438T14 15.5t.438 1.063T15.5 17m0-7q.625 0 1.063-.437T17 8.5t-.437-1.062T15.5 7t-1.062.438T14 8.5t.438 1.063T15.5 10M3 21V3h18v18z"></svg:path>`,
})
export class MaterialSymbolsBackgroundDotLargeSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
