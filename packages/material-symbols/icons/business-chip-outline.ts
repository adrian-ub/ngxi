import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsBusinessChipOutlineIcon],svg[material-symbols-business-chip-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 16h6q.425 0 .713-.288T16 15v-4q0-.425-.288-.712T15 10h-1V9q0-.425-.288-.712T13 8h-2q-.425 0-.712.288T10 9v1H9q-.425 0-.712.288T8 11v4q0 .425.288.713T9 16m2-6V9h2v1zm-3 9q-2.925 0-4.962-2.037T1 12t2.038-4.962T8 5h8q2.925 0 4.963 2.038T23 12t-2.037 4.963T16 19zm0-2h8q2.075 0 3.538-1.463T21 12t-1.463-3.537T16 7H8Q5.925 7 4.463 8.463T3 12t1.463 3.538T8 17m4-5"></svg:path>`,
})
export class MaterialSymbolsBusinessChipOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
