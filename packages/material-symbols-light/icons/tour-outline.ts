import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTourOutlineIcon],svg[material-symbols-light-tour-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 21.5v-19h1v2h13.77L18.46 9l1.808 4.5H6.5v8zm1-16v7zm6 5q.633 0 1.066-.434Q14 9.633 14 9t-.434-1.066Q13.133 7.5 12.5 7.5t-1.066.434T11 9t.434 1.066q.433.434 1.066.434m-6 2h12.28L17.39 9l1.392-3.5H6.5z"></svg:path>`,
})
export class MaterialSymbolsLightTourOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
