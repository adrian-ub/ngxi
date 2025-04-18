import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsGameController01Icon],svg[hugeicons-game-controller-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 13h2m-1-4V3m8.153 17.917c1.861-.588 2.407-4.162 1.218-7.983s-3.662-6.44-5.524-5.851c-1.15.363-1.203 1.779-2.15 2.295c-.224.122-.537.122-1.165.122h-1.064c-.627 0-.941 0-1.165-.122c-.947-.516-1-1.932-2.15-2.295c-1.862-.589-4.335 2.031-5.524 5.851s-.643 7.395 1.218 7.983c1.36.43 3.044-.85 4.317-3.059c.85-1.473 1.234-1.858 2.94-1.858h1.792c1.706 0 2.09.385 2.94 1.858c1.273 2.209 2.958 3.489 4.317 3.06" color="currentColor"></svg:path>`,
})
export class HugeiconsGameController01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
