import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsNaturePeopleSharpIcon],svg[material-symbols-nature-people-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 11q-.65 0-1.075-.425T3 9.5t.425-1.075T4.5 8t1.075.425T6 9.5t-.425 1.075T4.5 11M3 22v-5H2v-5h5v5H6v3h8v-5h-1.75q-1.775 0-3.012-1.237T8 10.75q0-1.325.713-2.363T10.55 6.85q.275-1.625 1.513-2.737T15 3t2.938 1.113T19.45 6.85q1.125.5 1.838 1.538T22 10.75q0 1.775-1.237 3.013T17.75 15H16v5h5v2z"></svg:path>`,
})
export class MaterialSymbolsNaturePeopleSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
