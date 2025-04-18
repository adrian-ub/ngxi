import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPageviewSharpIcon],svg[material-symbols-light-pageview-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 14q-1.05 0-1.775-.725T9 11.5t.725-1.775T11.5 9t1.775.725T14 11.5t-.725 1.775T11.5 14M3 19V5h18v14h-1.023l-5.561-5.562q.35-.505.467-.952q.117-.445.117-.986q0-1.458-1.02-2.48Q12.962 8 11.505 8t-2.48 1.02T8 11.496t1.02 2.48T11.5 15q.65 0 1.215-.204q.564-.204 1.031-.611L18.562 19z"></svg:path>`,
})
export class MaterialSymbolsLightPageviewSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
