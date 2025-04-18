import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEarbuds2SharpIcon],svg[material-symbols-earbuds-2-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 23V12h7v6h-2v5zm-3.5-4q-1.7 0-2.9-1.15T8.4 15q0-1.675 1.2-2.837T12.5 11h2v8zM3 13V8H1V2h7v11zm6.5-4V1h2q1.675 0 2.888 1.163T15.6 5q0 1.7-1.212 2.85T11.5 9z"></svg:path>`,
})
export class MaterialSymbolsEarbuds2SharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
