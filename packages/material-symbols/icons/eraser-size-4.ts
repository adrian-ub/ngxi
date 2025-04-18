import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEraserSize4Icon],svg[material-symbols-eraser-size-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.9 20q-2.45 0-4.175-1.725T4 14.1q0-1.15.425-2.238t1.3-1.962L9.9 5.725q.875-.875 1.962-1.3T14.1 4q2.45 0 4.175 1.725T20 9.9q0 1.15-.425 2.237t-1.3 1.963L14.1 18.275q-.875.875-1.962 1.3T9.9 20"></svg:path>`,
})
export class MaterialSymbolsEraserSize4Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
