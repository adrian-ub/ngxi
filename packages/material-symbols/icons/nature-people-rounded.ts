import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsNaturePeopleRoundedIcon],svg[material-symbols-nature-people-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 11q-.65 0-1.075-.425T3 9.5t.425-1.075T4.5 8t1.075.425T6 9.5t-.425 1.075T4.5 11M6 20h8v-5h-1.75q-1.775 0-3.012-1.237T8 10.75q0-1.325.713-2.363T10.55 6.85q.275-1.625 1.513-2.737T15 3t2.938 1.113T19.45 6.85q1.125.5 1.838 1.538T22 10.75q0 1.775-1.237 3.013T17.75 15H16v5h4q.425 0 .713.288T21 21t-.288.713T20 22H4q-.425 0-.712-.288T3 21v-4q-.275-.275-.638-.437T2 16v-3q0-.425.288-.712T3 12h3q.425 0 .713.288T7 13v3q0 .4-.363.563T6 17z"></svg:path>`,
})
export class MaterialSymbolsNaturePeopleRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
