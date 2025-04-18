import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsAllInboxOutlineSharpIcon],svg[material-symbols-all-inbox-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 16h12v-3h-2.55q-.525.925-1.45 1.463T14 15q-1.05 0-1.975-.537T10.55 13H8zm6-3q.85 0 1.425-.587T16 11h4V4H8v7h4q0 .825.588 1.413T14 13m-8 5V2h16v16zm-4 4V6h2v14h14v2zm6-6h12z"></svg:path>`,
})
export class MaterialSymbolsAllInboxOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
